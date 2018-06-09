<?php

class my_portfolio extends page_base {

    use page_sanitizer;

    public function __destruct() {
        $this->destruct_page_sanitizer();
    }

    public function build(output $output) {
        $options = new sanitizer_config();
        $options->register_set('post', $this->post, cst_sanitizer::type_json);

        $this->_build_sanitizer($output, $options);
    }

    public function build_sanitizer(output $output) {
        $this->sanitizer->queue_item('post', cst_portfolio::p_has_access, cst_sanitizer::sane_boolean);
        $continue = $this->sanitizer->run_it();

        if ($continue === true) {
            $has_access   = $this->sanitizer->get('post', cst_portfolio::p_has_access);
            $project_info = $this->retrieve_projects($has_access);
        }

        if ($continue === true) {
            $this->response[cst_portfolio::p_project_info] = $project_info;
            $this->set_response_pass();
        }
        $output->format($this->response, output::angular);
    }

    // --- helpers ---
    private function retrieve_projects(bool $has_access): array {
        $return = array();
        if ($has_access === true) {
            $return = array(
                cst_portfolio::key_cygnus          => array(
                    cst_portfolio::p_organization => cst_portfolio::org_volunteer,
                    cst_portfolio::p_url          => 'cygnusmgmt-production.herokuapp.com',
                    cst_portfolio::p_github       => 'github.com/mmserran/cygnusmgmt',
                ),
                cst_portfolio::key_hpl             => array(
                    cst_portfolio::p_organization => cst_portfolio::org_hpulse,
                    cst_portfolio::p_url          => cst_portfolio::p_is_private,
                    cst_portfolio::p_github       => cst_portfolio::p_is_private,
                ),
                cst_portfolio::key_pulsemobile     => array(
                    cst_portfolio::p_organization => cst_portfolio::org_hpulse,
                    cst_portfolio::p_url          => cst_portfolio::p_is_private,
                    cst_portfolio::p_github       => cst_portfolio::p_is_private,
                ),
                cst_portfolio::key_internalc       => array(
                    cst_portfolio::p_organization => cst_portfolio::org_hpulse,
                    cst_portfolio::p_url          => cst_portfolio::p_is_private,
                    cst_portfolio::p_github       => cst_portfolio::p_is_private,
                ),
                cst_portfolio::key_pulsebooker     => array(
                    cst_portfolio::p_organization => cst_portfolio::org_hpulse,
                    cst_portfolio::p_url          => cst_portfolio::p_is_private,
                    cst_portfolio::p_github       => cst_portfolio::p_is_private,
                ),
                cst_portfolio::key_pulselink       => array(
                    cst_portfolio::p_organization => cst_portfolio::org_hpulse,
                    cst_portfolio::p_url          => cst_portfolio::p_is_private,
                    cst_portfolio::p_github       => cst_portfolio::p_is_private,
                ),
                cst_portfolio::key_pulsebooker_cro => array(
                    cst_portfolio::p_organization => cst_portfolio::org_hpulse,
                    cst_portfolio::p_url          => cst_portfolio::p_is_private,
                    cst_portfolio::p_github       => cst_portfolio::p_is_private,
                ),
                cst_portfolio::key_lab             => array(
                    cst_portfolio::p_organization => cst_portfolio::org_mserrano,
                    cst_portfolio::p_url          => 'lab.mserrano.net',
                    cst_portfolio::p_github       => 'github.com/mserrano-dev/LAB-MSERRANO',
                ),
                cst_portfolio::key_devops          => array(
                    cst_portfolio::p_organization => cst_portfolio::org_mserrano,
                    cst_portfolio::p_url          => cst_portfolio::p_not_avail,
                    cst_portfolio::p_github       => 'github.com/mserrano-dev/DevOps',
                ),
                cst_portfolio::key_www             => array(
                    cst_portfolio::p_organization => cst_portfolio::org_mserrano,
                    cst_portfolio::p_url          => 'www.mserrano.net',
                    cst_portfolio::p_github       => 'github.com/mserrano-dev/WWW-MSERRANO',
                ),
                cst_portfolio::key_docs            => array(
                    cst_portfolio::p_organization => cst_portfolio::org_mserrano,
                    cst_portfolio::p_url          => 'docs.mserrano.net',
                    cst_portfolio::p_github       => 'github.com/mserrano-dev/DOCS-MSERRANO',
                ),
            );
        }
        return $return;
    }

}
