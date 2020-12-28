import React from "react";
import { graphql } from "gatsby";

import Layout from "../components/Layout";
import SEO from '../components/seo';
import Banner from "../components/Banner";

// TODO Ajouter un "main-not-display" pour les résolutions non prises en charges

const BaseTpl = ({ data }) => {

    // const [datas] = React.useState(data.wpcontent.page);

    return (
        <Layout>
            <SEO lang="fr_FR" title='Benjamin Guelle'/>
            <Banner />
        </Layout>
    );
};

export default BaseTpl;