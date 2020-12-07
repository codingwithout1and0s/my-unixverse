import React from 'react'
import Container from '../components/container'
import SEO from '../components/seo'
import Layout from '../containers/layout'

import {responsiveTitle1} from '../components/typography.module.css'

const About = () => {
  return (
    <Layout>
      <SEO title='About Me' />
      <Container>
        <h1 className={responsiveTitle1}>About Me</h1>
        <p>Culpa aliqua do veniam proident et sunt veniam eu amet do. Exercitation cillum irure elit anim exercitation occaecat commodo labore duis. Non voluptate mollit velit proident ea ad amet laborum dolor deserunt consectetur aliquip occaecat. Ea irure culpa sit laborum eiusmod.

          Excepteur sit incididunt ex do culpa officia. Minim fugiat officia exercitation incididunt eiusmod id adipisicing veniam. Occaecat nostrud velit deserunt ut ipsum laborum exercitation enim sit aute.

          Pariatur exercitation nisi excepteur proident velit ut sunt magna laborum ut velit ad. Fugiat velit ullamco anim minim duis occaecat labore non amet. Velit ad aute eiusmod cillum sunt nulla minim non dolor adipisicing nostrud ullamco non fugiat. Non non fugiat dolor aliqua excepteur exercitation aliqua ea in consequat id. Consequat veniam exercitation cupidatat voluptate magna culpa voluptate dolore incididunt nulla laboris adipisicing consectetur.

          Sit cillum irure elit occaecat esse elit magna consequat amet dolore esse quis minim. Lorem in nulla proident eu ea sunt adipisicing laboris pariatur ullamco nulla. Velit quis officia quis aute aliquip commodo eiusmod in laborum. Aliquip ad in elit cillum quis. Consequat excepteur dolore Lorem mollit consectetur esse magna do aliqua non sint non voluptate. Enim pariatur in ipsum laboris nulla. Elit non occaecat anim sit ullamco non duis.

          Adipisicing tempor eu qui proident exercitation. Duis laborum sit eu magna ut Lorem consectetur ut consequat aute id pariatur cillum ex. Minim minim duis ad duis ad incididunt est exercitation ipsum nostrud. Excepteur exercitation veniam sunt ad nisi labore ipsum nisi sunt sit veniam irure. Amet voluptate ad duis qui elit Lorem aliqua commodo dolor ad.</p>
      </Container>
    </Layout>
  )
}

export default About
