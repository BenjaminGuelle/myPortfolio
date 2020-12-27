import React from "react";
import { graphql } from "gatsby";

import Layout from "../components/Layout";
import SEO from '../components/seo';

// TODO Ajouter un "main-not-display" pour les résolutions non prises en charges

const BaseTpl = ({ data }) => {

    // const [datas] = React.useState(data.wpcontent.page);

    return (
        <Layout>
            <SEO lang="fr_FR" title='Benjamin Guelle'/>
        </Layout>
    );
};

export default BaseTpl;