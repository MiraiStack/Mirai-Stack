"use client";

import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Terms() {
    return (
        <div className="bg-brand-dark min-h-screen">
            <Navbar />

            <main className="max-w-4xl mx-auto px-6 py-32 text-neutral-300">
                <h1 className="text-4xl md:text-5xl font-bold text-white mb-12 border-b border-brand-border pb-8">Terms and Conditions</h1>

                <div className="prose prose-invert max-w-none">
                    <p className="mb-4 text-neutral-300 leading-relaxed"><strong>TERMS AND CONDITIONS</strong></p>
                    <p className="mb-4 text-neutral-300 leading-relaxed"><strong>MIRAI STACK (PTY) LTD</strong></p>
                    <hr className="my-12 border-brand-border" />
                    <h2 className="text-2xl font-bold text-white mb-6 mt-12">TABLE OF CONTENTS</h2>
                    <ol className="list-decimal pl-6 space-y-2 mb-8 text-neutral-300">
                        <li>Definitions and Interpretation</li>
                        <li>Acceptance of Terms</li>
                        <li>Description of Services</li>
                        <li>User Accounts and Registration</li>
                        <li>Acceptable Use Policy</li>
                        <li>Intellectual Property Rights</li>
                        <li>Platform Usage Rules</li>
                        <li>Marketplace Terms</li>
                        <li>Seller Responsibilities</li>
                        <li>Customer Purchase Terms</li>
                        <li>Payment Processing and Fees</li>
                        <li>Refunds and Disputes</li>
                        <li>Content Ownership and User-Generated Content</li>
                        <li>Privacy and Data Protection</li>
                        <li>Data Security and Storage</li>
                        <li>Limitation of Liability</li>
                        <li>Indemnification</li>
                        <li>Third-Party Services and Integrations</li>
                        <li>Service Availability and Modifications</li>
                        <li>Suspension and Termination of Accounts</li>
                        <li>Governing Law and Jurisdiction</li>
                        <li>Dispute Resolution Procedures</li>
                        <li>Compliance with South African Digital Regulations</li>
                        <li>Changes to the Terms and Conditions</li>
                        <li>Contact Information and Legal Notices</li>
                    </ol>
                    <hr className="my-12 border-brand-border" />
                    <h2 className="text-2xl font-bold text-white mb-6 mt-12">1. DEFINITIONS AND INTERPRETATION</h2>
                    <p className="mb-4 text-neutral-300 leading-relaxed"><strong>1.1</strong> In these Terms and Conditions, unless the context otherwise requires, the following terms shall have the meanings assigned to them:</p>
                    <p className="mb-4 text-neutral-300 leading-relaxed"><strong>"Account"</strong> means a registered user profile created on any Mirai Stack Platform;</p>
                    <p className="mb-4 text-neutral-300 leading-relaxed"><strong>"Agora"</strong> means the digital publishing platform operated by Mirai Stack enabling writers to create, distribute, and manage long-form content without algorithm-driven feeds;</p>
                    <p className="mb-4 text-neutral-300 leading-relaxed"><strong>"Applicable Law"</strong> means all laws, statutes, regulations, and codes of South Africa, including but not limited to the Electronic Communications and Transactions Act 25 of 2002 (ECTA), the Protection of Personal Information Act 4 of 2013 (POPIA), and the Consumer Protection Act 68 of 2008 (CPA);</p>
                    <p className="mb-4 text-neutral-300 leading-relaxed"><strong>"Client"</strong> means any third party engaging Mirai Stack for software development, consulting, or technical services;</p>
                    <p className="mb-4 text-neutral-300 leading-relaxed"><strong>"Content"</strong> means any text, images, audio, video, software, data, or other materials uploaded, posted, transmitted, or otherwise made available through the Platforms;</p>
                    <p className="mb-4 text-neutral-300 leading-relaxed"><strong>"Customer"</strong> means any user who purchases goods or services through The Connect, Stitches, or any other Mirai Stack marketplace platform;</p>
                    <p className="mb-4 text-neutral-300 leading-relaxed"><strong>"ECTA"</strong> means the Electronic Communications and Transactions Act 25 of 2002, as amended;</p>
                    <p className="mb-4 text-neutral-300 leading-relaxed"><strong>"FitSocial"</strong> means the community-driven digital fitness engagement platform operated by Mirai Stack that connects users through shared wellness journeys and gamified challenges;</p>
                    <p className="mb-4 text-neutral-300 leading-relaxed"><strong>"Intellectual Property"</strong> means all patents, copyrights, trademarks, trade secrets, domain names, and other proprietary rights;</p>
                    <p className="mb-4 text-neutral-300 leading-relaxed"><strong>"KenganSocial"</strong> means the SaaS social media management platform operated by Mirai Stack for content scheduling and analytics;</p>
                    <p className="mb-4 text-neutral-300 leading-relaxed"><strong>"KenganStudy"</strong> means the AI-enhanced learning ecosystem operated by Mirai Stack delivering personalized education experiences;</p>
                    <p className="mb-4 text-neutral-300 leading-relaxed"><strong>"Mirai Stack," "we," "us," or "our"</strong> means Mirai Stack (Pty) Ltd, a private company incorporated in South Africa with its principal place of business at Durban, South Africa;</p>
                    <p className="mb-4 text-neutral-300 leading-relaxed"><strong>"Mirai Stack Platforms" or "Platforms"</strong> means collectively Prosoche, Agora, FitSocial, The Connect, Stitches, KenganStudy, KenganSocial, the Eminence Printing Website, and any other digital platforms owned, operated, or maintained by Mirai Stack;</p>
                    <p className="mb-4 text-neutral-300 leading-relaxed"><strong>"Personal Information"</strong> has the meaning ascribed to it in POPIA;</p>
                    <p className="mb-4 text-neutral-300 leading-relaxed"><strong>"POPIA"</strong> means the Protection of Personal Information Act 4 of 2013, as amended;</p>
                    <p className="mb-4 text-neutral-300 leading-relaxed"><strong>"Prosoche"</strong> means the reflective intelligence platform operated by Mirai Stack providing structured journaling and reflection tools;</p>
                    <p className="mb-4 text-neutral-300 leading-relaxed"><strong>"Seller"</strong> means any business or individual listing products or services for sale on The Connect, Stitches, or any other Mirai Stack marketplace platform;</p>
                    <p className="mb-4 text-neutral-300 leading-relaxed"><strong>"Services"</strong> means all software engineering, platform architecture, web application development, mobile application development, automation systems, technical consulting, and digital infrastructure design services provided by Mirai Stack;</p>
                    <p className="mb-4 text-neutral-300 leading-relaxed"><strong>"Stitches"</strong> means the global fashion commerce platform operated by Mirai Stack connecting international clothing suppliers with local customers;</p>
                    <p className="mb-4 text-neutral-300 leading-relaxed"><strong>"The Connect"</strong> means the multi-vendor marketplace platform operated by Mirai Stack enabling businesses to create digital storefronts;</p>
                    <p className="mb-4 text-neutral-300 leading-relaxed"><strong>"User," "you," or "your"</strong> means any individual or entity accessing or using any Mirai Stack Platform or Service;</p>
                    <p className="mb-4 text-neutral-300 leading-relaxed"><strong>"User-Generated Content"</strong> means any Content created, uploaded, or shared by Users on the Platforms;</p>
                    <p className="mb-4 text-neutral-300 leading-relaxed"><strong>"Website"</strong> means www.miraistack.co.za and any associated subdomains.</p>
                    <p className="mb-4 text-neutral-300 leading-relaxed"><strong>1.2</strong> Headings are for convenience only and shall not affect interpretation.</p>
                    <p className="mb-4 text-neutral-300 leading-relaxed"><strong>1.3</strong> References to statutory provisions include any amendments or re-enactments thereof.</p>
                    <p className="mb-4 text-neutral-300 leading-relaxed"><strong>1.4</strong> Words importing the singular include the plural and vice versa.</p>
                    <p className="mb-4 text-neutral-300 leading-relaxed"><strong>1.5</strong> References to persons include natural persons, corporate entities, and unincorporated associations.</p>
                    <hr className="my-12 border-brand-border" />
                    <h2 className="text-2xl font-bold text-white mb-6 mt-12">2. ACCEPTANCE OF TERMS</h2>
                    <p className="mb-4 text-neutral-300 leading-relaxed"><strong>2.1</strong> These Terms and Conditions constitute a legally binding agreement between you and Mirai Stack regarding your access to and use of the Mirai Stack Platforms and Services.</p>
                    <p className="mb-4 text-neutral-300 leading-relaxed"><strong>2.2</strong> By accessing or using any Mirai Stack Platform, creating an Account, or engaging our Services, you acknowledge that you have read, understood, and agree to be bound by these Terms and Conditions and our Privacy Policy.</p>
                    <p className="mb-4 text-neutral-300 leading-relaxed"><strong>2.3</strong> If you are accessing or using the Platforms on behalf of a company, organization, or other legal entity, you represent and warrant that you have the authority to bind such entity to these Terms and Conditions.</p>
                    <p className="mb-4 text-neutral-300 leading-relaxed"><strong>2.4</strong> If you do not agree to these Terms and Conditions in their entirety, you must not access or use the Mirai Stack Platforms or Services.</p>
                    <p className="mb-4 text-neutral-300 leading-relaxed"><strong>2.5</strong> These Terms and Conditions comply with the requirements of ECTA for electronic agreements and constitute valid and binding electronic contracts enforceable under South African law.</p>
                    <p className="mb-4 text-neutral-300 leading-relaxed"><strong>2.6</strong> We may require you to expressly accept these Terms and Conditions through an electronic click-wrap or browse-wrap mechanism before accessing certain features of the Platforms.</p>
                    <hr className="my-12 border-brand-border" />
                    <h2 className="text-2xl font-bold text-white mb-6 mt-12">3. DESCRIPTION OF SERVICES</h2>
                    <p className="mb-4 text-neutral-300 leading-relaxed"><strong>3.1</strong> Mirai Stack operates as a software engineering and digital platform architecture studio, providing the following categories of services:</p>
                    <p className="mb-4 text-neutral-300 leading-relaxed"><strong>3.1.1 Internal Platform Operations:</strong> We design, develop, operate, and maintain proprietary digital platforms including:<br />
                        - <strong>Prosoche:</strong> A reflective journaling and personal awareness platform;<br />
                        - <strong>Agora:</strong> A digital publishing ecosystem for long-form content;<br />
                        - <strong>FitSocial:</strong> A community-driven fitness engagement platform;<br />
                        - <strong>The Connect:</strong> A multi-vendor marketplace infrastructure;<br />
                        - <strong>Stitches:</strong> A fashion-focused e-commerce marketplace;<br />
                        - <strong>KenganStudy:</strong> An AI-enhanced learning ecosystem;<br />
                        - <strong>KenganSocial:</strong> A SaaS social media management platform.</p>
                    <p className="mb-4 text-neutral-300 leading-relaxed"><strong>3.1.2 Client Software Development:</strong> We provide bespoke software engineering, platform architecture, web application development, mobile application development, automation systems, technical consulting, and digital infrastructure design services for external organizations.</p>
                    <p className="mb-4 text-neutral-300 leading-relaxed"><strong>3.2</strong> Specific Platform functionalities include:</p>
                    <p className="mb-4 text-neutral-300 leading-relaxed"><strong>3.2.1 Prosoche:</strong> Structured journaling, guided reflection prompts, pattern analysis, and insight generation tools;</p>
                    <p className="mb-4 text-neutral-300 leading-relaxed"><strong>3.2.2 Agora:</strong> Content creation tools, distribution mechanisms, audience building features, and writer monetization options;</p>
                    <p className="mb-4 text-neutral-300 leading-relaxed"><strong>3.2.3 FitSocial:</strong> Workout tracking, progress monitoring, social interaction features, gamified challenges, and community engagement tools;</p>
                    <p className="mb-4 text-neutral-300 leading-relaxed"><strong>3.2.4 The Connect:</strong> Digital storefront creation, inventory management, product listing capabilities, and unified commerce infrastructure;</p>
                    <p className="mb-4 text-neutral-300 leading-relaxed"><strong>3.2.5 Stitches:</strong> International supplier connection, local customer interface, fashion product cataloging, and streamlined retail experience;</p>
                    <p className="mb-4 text-neutral-300 leading-relaxed"><strong>3.2.6 KenganStudy:</strong> Personalized education delivery, intelligent content delivery, learning analytics, and AI-enhanced tutoring;</p>
                    <p className="mb-4 text-neutral-300 leading-relaxed"><strong>3.2.7 KenganSocial:</strong> Content scheduling, analytics dashboard, multi-platform management, and automation tools.</p>
                    <p className="mb-4 text-neutral-300 leading-relaxed"><strong>3.3</strong> Mirai Stack reserves the right to modify, suspend, or discontinue any aspect of the Services or Platforms at any time, with or without notice.</p>
                    <p className="mb-4 text-neutral-300 leading-relaxed"><strong>3.4</strong> We do not warrant that the Services will be uninterrupted, timely, secure, or error-free.</p>
                    <hr className="my-12 border-brand-border" />
                    <h2 className="text-2xl font-bold text-white mb-6 mt-12">4. USER ACCOUNTS AND REGISTRATION</h2>
                    <p className="mb-4 text-neutral-300 leading-relaxed"><strong>4.1</strong> Access to certain features of the Mirai Stack Platforms requires registration and creation of an Account.</p>
                    <p className="mb-4 text-neutral-300 leading-relaxed"><strong>4.2</strong> To register for an Account, you must:<br />
                        - Be at least 18 years of age or the age of majority in your jurisdiction;<br />
                        - Provide accurate, current, and complete information as prompted by the registration form;<br />
                        - Maintain and promptly update your Account information to keep it accurate and complete.</p>
                    <p className="mb-4 text-neutral-300 leading-relaxed"><strong>4.3</strong> You are solely responsible for maintaining the confidentiality of your Account credentials, including your password.</p>
                    <p className="mb-4 text-neutral-300 leading-relaxed"><strong>4.4</strong> You agree to notify us immediately of any unauthorized use of your Account or any other breach of security.</p>
                    <p className="mb-4 text-neutral-300 leading-relaxed"><strong>4.5</strong> You may not:<br />
                        - Use another person's Account without permission;<br />
                        - Create multiple Accounts for fraudulent or deceptive purposes;<br />
                        - Share your Account credentials with third parties;<br />
                        - Transfer your Account to another party without our prior written consent.</p>
                    <p className="mb-4 text-neutral-300 leading-relaxed"><strong>4.6</strong> Mirai Stack shall not be liable for any loss or damage arising from your failure to comply with these Account security obligations.</p>
                    <p className="mb-4 text-neutral-300 leading-relaxed"><strong>4.7</strong> We reserve the right to suspend or terminate Accounts that have been inactive for extended periods, subject to applicable data retention requirements under POPIA.</p>
                    <p className="mb-4 text-neutral-300 leading-relaxed"><strong>4.8</strong> Upon registration, you consent to receive electronic communications from Mirai Stack regarding your Account, the Platforms, and our Services.</p>
                    <hr className="my-12 border-brand-border" />
                    <h2 className="text-2xl font-bold text-white mb-6 mt-12">5. ACCEPTABLE USE POLICY</h2>
                    <p className="mb-4 text-neutral-300 leading-relaxed"><strong>5.1</strong> You agree to use the Mirai Stack Platforms and Services only for lawful purposes and in accordance with these Terms and Conditions.</p>
                    <p className="mb-4 text-neutral-300 leading-relaxed"><strong>5.2</strong> You expressly agree NOT to:</p>
                    <p className="mb-4 text-neutral-300 leading-relaxed"><strong>5.2.1</strong> Use the Platforms in any manner that violates any Applicable Law or regulation;</p>
                    <p className="mb-4 text-neutral-300 leading-relaxed"><strong>5.2.2</strong> Engage in any fraudulent, deceptive, or misleading conduct;</p>
                    <p className="mb-4 text-neutral-300 leading-relaxed"><strong>5.2.3</strong> Impersonate any person or entity, or falsely state or misrepresent your affiliation with any person or entity;</p>
                    <p className="mb-4 text-neutral-300 leading-relaxed"><strong>5.2.4</strong> Interfere with or disrupt the integrity or performance of the Platforms or the data contained therein;</p>
                    <p className="mb-4 text-neutral-300 leading-relaxed"><strong>5.2.5</strong> Attempt to gain unauthorized access to the Platforms, their underlying systems, or related networks;</p>
                    <p className="mb-4 text-neutral-300 leading-relaxed"><strong>5.2.6</strong> Use any automated means, including robots, spiders, scrapers, or data mining tools, to access, monitor, or copy any part of the Platforms without our express written permission;</p>
                    <p className="mb-4 text-neutral-300 leading-relaxed"><strong>5.2.7</strong> Upload, transmit, or distribute any Content that:<br />
                        - Is unlawful, harmful, threatening, abusive, harassing, defamatory, vulgar, obscene, or otherwise objectionable;<br />
                        - Infringes upon any Intellectual Property rights or other proprietary rights of any party;<br />
                        - Contains viruses, malware, or other harmful code;<br />
                        - Constitutes unsolicited commercial communications or "spam";</p>
                    <p className="mb-4 text-neutral-300 leading-relaxed"><strong>5.2.8</strong> Harass, abuse, or harm another person, including Mirai Stack employees, agents, or other Users;</p>
                    <p className="mb-4 text-neutral-300 leading-relaxed"><strong>5.2.9</strong> Collect or store Personal Information about other Users without their express consent;</p>
                    <p className="mb-4 text-neutral-300 leading-relaxed"><strong>5.2.10</strong> Use the Platforms for any illegal gambling, betting, or lottery activities;</p>
                    <p className="mb-4 text-neutral-300 leading-relaxed"><strong>5.2.11</strong> Engage in money laundering, terrorist financing, or other financial crimes.</p>
                    <p className="mb-4 text-neutral-300 leading-relaxed"><strong>5.3</strong> Mirai Stack reserves the right to investigate and take appropriate legal action against anyone who violates this Acceptable Use Policy, including without limitation, removing offending Content, suspending or terminating Accounts, and reporting violations to law enforcement authorities.</p>
                    <p className="mb-4 text-neutral-300 leading-relaxed"><strong>5.4</strong> We may cooperate with law enforcement authorities and comply with court orders requesting or directing us to disclose the identity of anyone posting any Content in violation of Applicable Law.</p>
                    <hr className="my-12 border-brand-border" />
                    <h2 className="text-2xl font-bold text-white mb-6 mt-12">6. INTELLECTUAL PROPERTY RIGHTS</h2>
                    <p className="mb-4 text-neutral-300 leading-relaxed"><strong>6.1</strong> Mirai Stack Intellectual Property:</p>
                    <p className="mb-4 text-neutral-300 leading-relaxed"><strong>6.1.1</strong> All Intellectual Property rights in and to the Mirai Stack Platforms, including but not limited to software, algorithms, user interfaces, graphics, logos, trademarks, and documentation, are owned by or licensed to Mirai Stack.</p>
                    <p className="mb-4 text-neutral-300 leading-relaxed"><strong>6.1.2</strong> Nothing in these Terms and Conditions shall be construed as transferring any Intellectual Property rights to you.</p>
                    <p className="mb-4 text-neutral-300 leading-relaxed"><strong>6.1.3</strong> You are granted a limited, non-exclusive, non-transferable, revocable license to access and use the Platforms solely for their intended purposes in accordance with these Terms and Conditions.</p>
                    <p className="mb-4 text-neutral-300 leading-relaxed"><strong>6.1.4</strong> The Mirai Stack name, logo, and all related names, logos, product and service names, designs, and slogans are trademarks of Mirai Stack or its affiliates. You may not use such marks without our prior written permission.</p>
                    <p className="mb-4 text-neutral-300 leading-relaxed"><strong>6.2</strong> Client Project Intellectual Property:</p>
                    <p className="mb-4 text-neutral-300 leading-relaxed"><strong>6.2.1</strong> For Client software projects, Intellectual Property rights shall be allocated as specified in the individual service agreement between Mirai Stack and the Client.</p>
                    <p className="mb-4 text-neutral-300 leading-relaxed"><strong>6.2.2</strong> Unless otherwise agreed in writing, Mirai Stack retains ownership of all pre-existing Intellectual Property and general methodologies used in Client projects.</p>
                    <p className="mb-4 text-neutral-300 leading-relaxed"><strong>6.3</strong> Open Source and Third-Party Components:</p>
                    <p className="mb-4 text-neutral-300 leading-relaxed"><strong>6.3.1</strong> Certain components of the Platforms may incorporate open-source software or third-party libraries subject to their respective license terms.</p>
                    <p className="mb-4 text-neutral-300 leading-relaxed"><strong>6.3.2</strong> Your use of such components is governed by their applicable open-source licenses, which are incorporated by reference into these Terms and Conditions.</p>
                    <hr className="my-12 border-brand-border" />
                    <h2 className="text-2xl font-bold text-white mb-6 mt-12">7. PLATFORM USAGE RULES</h2>
                    <p className="mb-4 text-neutral-300 leading-relaxed"><strong>7.1</strong> General Platform Rules:</p>
                    <p className="mb-4 text-neutral-300 leading-relaxed"><strong>7.1.1</strong> You may only use the Platforms for their intended purposes as described in Section 3.</p>
                    <p className="mb-4 text-neutral-300 leading-relaxed"><strong>7.1.2</strong> You may not reverse engineer, decompile, disassemble, or otherwise attempt to discover the source code of the Platforms.</p>
                    <p className="mb-4 text-neutral-300 leading-relaxed"><strong>7.1.3</strong> You may not modify, adapt, translate, or create derivative works based upon the Platforms.</p>
                    <p className="mb-4 text-neutral-300 leading-relaxed"><strong>7.1.4</strong> You may not rent, lease, lend, sell, sublicense, or otherwise transfer any rights granted to you under these Terms and Conditions.</p>
                    <p className="mb-4 text-neutral-300 leading-relaxed"><strong>7.2</strong> Specific Platform Rules:</p>
                    <p className="mb-4 text-neutral-300 leading-relaxed"><strong>7.2.1 Prosoche:</strong> You may not use the platform to store or transmit medical or health information that requires professional healthcare provider handling. The platform is for personal reflection only and does not constitute medical or psychological advice.</p>
                    <p className="mb-4 text-neutral-300 leading-relaxed"><strong>7.2.2 Agora:</strong> You retain ownership of your original content published on Agora, subject to the license granted in Section 13. You may not publish content that violates the intellectual property rights of others.</p>
                    <p className="mb-4 text-neutral-300 leading-relaxed"><strong>7.2.3 FitSocial:</strong> You acknowledge that fitness activities carry inherent risks. You should consult with a healthcare professional before beginning any exercise program. Mirai Stack is not responsible for any injuries resulting from fitness activities.</p>
                    <p className="mb-4 text-neutral-300 leading-relaxed"><strong>7.2.4 KenganStudy:</strong> AI-generated content and recommendations are provided for educational purposes only and do not constitute professional educational or psychological advice.</p>
                    <p className="mb-4 text-neutral-300 leading-relaxed"><strong>7.2.5 KenganSocial:</strong> You are responsible for ensuring that your use of social media management features complies with the terms of service of third-party social media platforms.</p>
                    <hr className="my-12 border-brand-border" />
                    <h2 className="text-2xl font-bold text-white mb-6 mt-12">8. MARKETPLACE TERMS</h2>
                    <p className="mb-4 text-neutral-300 leading-relaxed"><strong>8.1</strong> Application of This Section:</p>
                    <p className="mb-4 text-neutral-300 leading-relaxed"><strong>8.1.1</strong> This Section 8 applies to The Connect and Stitches platforms, which operate as multi-vendor marketplaces.</p>
                    <p className="mb-4 text-neutral-300 leading-relaxed"><strong>8.1.2</strong> Mirai Stack acts as a platform provider and facilitator of transactions between Sellers and Customers.</p>
                    <p className="mb-4 text-neutral-300 leading-relaxed"><strong>8.2</strong> Platform Role:</p>
                    <p className="mb-4 text-neutral-300 leading-relaxed"><strong>8.2.1</strong> Mirai Stack is not a party to any transaction between Sellers and Customers.</p>
                    <p className="mb-4 text-neutral-300 leading-relaxed"><strong>8.2.2</strong> We do not own, create, sell, resell, or control products or services listed by Sellers.</p>
                    <p className="mb-4 text-neutral-300 leading-relaxed"><strong>8.2.3</strong> We are not responsible for the quality, safety, legality, or accuracy of products listed on the marketplaces.</p>
                    <p className="mb-4 text-neutral-300 leading-relaxed"><strong>8.3</strong> Transaction Facilitation:</p>
                    <p className="mb-4 text-neutral-300 leading-relaxed"><strong>8.3.1</strong> The Platforms provide infrastructure for listing products, processing orders, and facilitating payments.</p>
                    <p className="mb-4 text-neutral-300 leading-relaxed"><strong>8.3.2</strong> Contractual relations regarding the sale of products are formed directly between the Seller and the Customer.</p>
                    <p className="mb-4 text-neutral-300 leading-relaxed"><strong>8.3.3</strong> Mirai Stack may provide dispute resolution mechanisms but is not obligated to mediate disputes between Sellers and Customers.</p>
                    <p className="mb-4 text-neutral-300 leading-relaxed"><strong>8.4</strong> Prohibited Products and Services:</p>
                    <p className="mb-4 text-neutral-300 leading-relaxed"><strong>8.4.1</strong> The following may not be listed or sold on Mirai Stack marketplaces:<br />
                        - Illegal drugs, controlled substances, or drug paraphernalia;<br />
                        - Weapons, firearms, ammunition, or explosive materials;<br />
                        - Counterfeit or stolen goods;<br />
                        - Products infringing intellectual property rights;<br />
                        - Hazardous materials;<br />
                        - Human remains or body parts;<br />
                        - Live animals (with limited exceptions for certain categories on The Connect);<br />
                        - Services that are illegal or violate these Terms and Conditions.</p>
                    <p className="mb-4 text-neutral-300 leading-relaxed"><strong>8.5</strong> Mirai Stack reserves the right to remove any listing that violates these Terms and Conditions or Applicable Law without prior notice.</p>
                    <hr className="my-12 border-brand-border" />
                    <h2 className="text-2xl font-bold text-white mb-6 mt-12">9. SELLER RESPONSIBILITIES</h2>
                    <p className="mb-4 text-neutral-300 leading-relaxed"><strong>9.1</strong> Registration and Verification:</p>
                    <p className="mb-4 text-neutral-300 leading-relaxed"><strong>9.1.1</strong> To list products on The Connect or Stitches, Sellers must complete a registration process and provide accurate business information.</p>
                    <p className="mb-4 text-neutral-300 leading-relaxed"><strong>9.1.2</strong> Sellers must maintain current business registrations, tax clearances, and any licenses required for their products or services.</p>
                    <p className="mb-4 text-neutral-300 leading-relaxed"><strong>9.1.3</strong> Mirai Stack may verify Seller information and may suspend listing privileges pending verification.</p>
                    <p className="mb-4 text-neutral-300 leading-relaxed"><strong>9.2</strong> Product Listings:</p>
                    <p className="mb-4 text-neutral-300 leading-relaxed"><strong>9.2.1</strong> Sellers must provide accurate, complete, and truthful information about products, including descriptions, specifications, pricing, and availability.</p>
                    <p className="mb-4 text-neutral-300 leading-relaxed"><strong>9.2.2</strong> Product images must accurately represent the actual product.</p>
                    <p className="mb-4 text-neutral-300 leading-relaxed"><strong>9.2.3</strong> Pricing must include all applicable taxes and fees, clearly displayed to Customers.</p>
                    <p className="mb-4 text-neutral-300 leading-relaxed"><strong>9.2.4</strong> Sellers must promptly update listings to reflect current inventory levels and avoid overselling.</p>
                    <p className="mb-4 text-neutral-300 leading-relaxed"><strong>9.3</strong> Order Fulfillment:</p>
                    <p className="mb-4 text-neutral-300 leading-relaxed"><strong>9.3.1</strong> Sellers must fulfill orders within the timeframe specified in their listings or as agreed with the Customer.</p>
                    <p className="mb-4 text-neutral-300 leading-relaxed"><strong>9.3.2</strong> Sellers are responsible for packaging, shipping, and delivery of products.</p>
                    <p className="mb-4 text-neutral-300 leading-relaxed"><strong>9.3.3</strong> Sellers must provide tracking information where applicable.</p>
                    <p className="mb-4 text-neutral-300 leading-relaxed"><strong>9.4</strong> Customer Service:</p>
                    <p className="mb-4 text-neutral-300 leading-relaxed"><strong>9.4.1</strong> Sellers are responsible for responding to Customer inquiries in a timely and professional manner.</p>
                    <p className="mb-4 text-neutral-300 leading-relaxed"><strong>9.4.2</strong> Sellers must handle returns, refunds, and exchanges in accordance with the CPA and these Terms and Conditions.</p>
                    <p className="mb-4 text-neutral-300 leading-relaxed"><strong>9.5</strong> Compliance:</p>
                    <p className="mb-4 text-neutral-300 leading-relaxed"><strong>9.5.1</strong> Sellers warrant that:<br />
                        - They have the legal right to sell the products listed;<br />
                        - Products comply with all Applicable Laws and safety standards;<br />
                        - Products do not infringe any third-party Intellectual Property rights;<br />
                        - They will comply with all tax obligations related to their sales.</p>
                    <p className="mb-4 text-neutral-300 leading-relaxed"><strong>9.6</strong> Fees and Commissions:</p>
                    <p className="mb-4 text-neutral-300 leading-relaxed"><strong>9.6.1</strong> Sellers agree to pay all applicable fees, commissions, and charges as specified in the Seller Agreement.</p>
                    <p className="mb-4 text-neutral-300 leading-relaxed"><strong>9.6.2</strong> Mirai Stack may modify fee structures with reasonable notice to Sellers.</p>
                    <hr className="my-12 border-brand-border" />
                    <h2 className="text-2xl font-bold text-white mb-6 mt-12">10. CUSTOMER PURCHASE TERMS</h2>
                    <p className="mb-4 text-neutral-300 leading-relaxed"><strong>10.1</strong> Order Formation:</p>
                    <p className="mb-4 text-neutral-300 leading-relaxed"><strong>10.1.1</strong> Placement of an order constitutes an offer to purchase products subject to these Terms and Conditions and the Seller's terms.</p>
                    <p className="mb-4 text-neutral-300 leading-relaxed"><strong>10.1.2</strong> An order is confirmed when the Seller accepts the offer and payment is processed.</p>
                    <p className="mb-4 text-neutral-300 leading-relaxed"><strong>10.1.3</strong> Mirai Stack is not responsible for Seller acceptance or rejection of orders.</p>
                    <p className="mb-4 text-neutral-300 leading-relaxed"><strong>10.2</strong> Pricing and Payment:</p>
                    <p className="mb-4 text-neutral-300 leading-relaxed"><strong>10.2.1</strong> All prices are displayed in South African Rand (ZAR) unless otherwise indicated.</p>
                    <p className="mb-4 text-neutral-300 leading-relaxed"><strong>10.2.2</strong> Prices include Value Added Tax (VAT) where applicable.</p>
                    <p className="mb-4 text-neutral-300 leading-relaxed"><strong>10.2.3</strong> Payment must be made through the payment methods provided on the Platforms.</p>
                    <p className="mb-4 text-neutral-300 leading-relaxed"><strong>10.2.4</strong> Customers warrant that they are authorized to use the selected payment method.</p>
                    <p className="mb-4 text-neutral-300 leading-relaxed"><strong>10.3</strong> Delivery:</p>
                    <p className="mb-4 text-neutral-300 leading-relaxed"><strong>10.3.1</strong> Delivery terms are as specified by the individual Seller.</p>
                    <p className="mb-4 text-neutral-300 leading-relaxed"><strong>10.3.2</strong> Risk of loss and title for products pass to the Customer upon delivery to the carrier or Customer, as specified in the Seller's terms.</p>
                    <p className="mb-4 text-neutral-300 leading-relaxed"><strong>10.4</strong> Consumer Rights:</p>
                    <p className="mb-4 text-neutral-300 leading-relaxed"><strong>10.4.1</strong> Customers who are consumers under the CPA have the right to:<br />
                        - Receive goods that are reasonably suitable for the purpose generally intended;<br />
                        - Receive goods of good quality, in good working order, and free of defects;<br />
                        - Fair, just, and reasonable terms and conditions.</p>
                    <p className="mb-4 text-neutral-300 leading-relaxed"><strong>10.4.2</strong> Direct marketing cooling-off periods under the CPA apply where applicable.</p>
                    <p className="mb-4 text-neutral-300 leading-relaxed"><strong>10.5</strong> Product Reviews:</p>
                    <p className="mb-4 text-neutral-300 leading-relaxed"><strong>10.5.1</strong> Customers may be invited to provide reviews of products and Sellers.</p>
                    <p className="mb-4 text-neutral-300 leading-relaxed"><strong>10.5.2</strong> Reviews must be honest, accurate, and based on actual experience.</p>
                    <p className="mb-4 text-neutral-300 leading-relaxed"><strong>10.5.3</strong> Mirai Stack reserves the right to remove reviews that violate these Terms and Conditions.</p>
                    <hr className="my-12 border-brand-border" />
                    <h2 className="text-2xl font-bold text-white mb-6 mt-12">11. PAYMENT PROCESSING AND FEES</h2>
                    <p className="mb-4 text-neutral-300 leading-relaxed"><strong>11.1</strong> Payment Processing:</p>
                    <p className="mb-4 text-neutral-300 leading-relaxed"><strong>11.1.1</strong> Mirai Stack utilizes third-party payment processors to facilitate transactions on the Platforms.</p>
                    <p className="mb-4 text-neutral-300 leading-relaxed"><strong>11.1.2</strong> By making a payment, you agree to the terms and conditions of the applicable payment processor.</p>
                    <p className="mb-4 text-neutral-300 leading-relaxed"><strong>11.1.3</strong> Mirai Stack does not store complete credit card numbers or banking details; such information is processed and stored by PCI-DSS compliant payment processors.</p>
                    <p className="mb-4 text-neutral-300 leading-relaxed"><strong>11.2</strong> Platform Fees:</p>
                    <p className="mb-4 text-neutral-300 leading-relaxed"><strong>11.2.1</strong> Mirai Stack may charge fees for certain Services or Platform features.</p>
                    <p className="mb-4 text-neutral-300 leading-relaxed"><strong>11.2.2</strong> All fees are disclosed prior to incurring the charge.</p>
                    <p className="mb-4 text-neutral-300 leading-relaxed"><strong>11.2.3</strong> Fees are non-refundable except as expressly provided in these Terms and Conditions or required by Applicable Law.</p>
                    <p className="mb-4 text-neutral-300 leading-relaxed"><strong>11.3</strong> Subscription Services:</p>
                    <p className="mb-4 text-neutral-300 leading-relaxed"><strong>11.3.1</strong> Certain Platforms may offer subscription-based services with recurring billing.</p>
                    <p className="mb-4 text-neutral-300 leading-relaxed"><strong>11.3.2</strong> Subscriptions automatically renew unless cancelled before the renewal date.</p>
                    <p className="mb-4 text-neutral-300 leading-relaxed"><strong>11.3.3</strong> You may cancel subscriptions through your Account settings or by contacting us.</p>
                    <p className="mb-4 text-neutral-300 leading-relaxed"><strong>11.4</strong> Late Payments:</p>
                    <p className="mb-4 text-neutral-300 leading-relaxed"><strong>11.4.1</strong> For invoiced Services, payment is due within 30 days of the invoice date unless otherwise agreed.</p>
                    <p className="mb-4 text-neutral-300 leading-relaxed"><strong>11.4.2</strong> Late payments may incur interest at the rate prescribed by the Prescribed Rate of Interest Act 55 of 1975.</p>
                    <p className="mb-4 text-neutral-300 leading-relaxed"><strong>11.5</strong> Currency and Conversion:</p>
                    <p className="mb-4 text-neutral-300 leading-relaxed"><strong>11.5.1</strong> All transactions are processed in South African Rand (ZAR) unless otherwise specified.</p>
                    <p className="mb-4 text-neutral-300 leading-relaxed"><strong>11.5.2</strong> For international transactions, currency conversion fees may apply as charged by your financial institution.</p>
                    <hr className="my-12 border-brand-border" />
                    <h2 className="text-2xl font-bold text-white mb-6 mt-12">12. REFUNDS AND DISPUTES</h2>
                    <p className="mb-4 text-neutral-300 leading-relaxed"><strong>12.1</strong> Refund Policy:</p>
                    <p className="mb-4 text-neutral-300 leading-relaxed"><strong>12.1.1</strong> Refund eligibility depends on the specific Platform, product, or Service purchased.</p>
                    <p className="mb-4 text-neutral-300 leading-relaxed"><strong>12.1.2</strong> Digital products and services may have limited refund rights in accordance with the CPA.</p>
                    <p className="mb-4 text-neutral-300 leading-relaxed"><strong>12.1.3</strong> Physical product refunds are governed by the Seller's return policy and the CPA.</p>
                    <p className="mb-4 text-neutral-300 leading-relaxed"><strong>12.2</strong> Subscription Refunds:</p>
                    <p className="mb-4 text-neutral-300 leading-relaxed"><strong>12.2.1</strong> Subscription fees are generally non-refundable for partial months or unused periods.</p>
                    <p className="mb-4 text-neutral-300 leading-relaxed"><strong>12.2.2</strong> Refunds may be granted at Mirai Stack's discretion in exceptional circumstances.</p>
                    <p className="mb-4 text-neutral-300 leading-relaxed"><strong>12.3</strong> Dispute Resolution Between Users:</p>
                    <p className="mb-4 text-neutral-300 leading-relaxed"><strong>12.3.1</strong> Mirai Stack encourages Sellers and Customers to resolve disputes directly.</p>
                    <p className="mb-4 text-neutral-300 leading-relaxed"><strong>12.3.2</strong> Where direct resolution fails, Mirai Stack may offer mediation services but is not obligated to do so.</p>
                    <p className="mb-4 text-neutral-300 leading-relaxed"><strong>12.3.3</strong> Mirai Stack's decisions in dispute resolution are final and binding on the parties.</p>
                    <p className="mb-4 text-neutral-300 leading-relaxed"><strong>12.4</strong> Chargebacks:</p>
                    <p className="mb-4 text-neutral-300 leading-relaxed"><strong>12.4.1</strong> Customers agree not to initiate chargebacks without first attempting to resolve disputes through the Platform's processes.</p>
                    <p className="mb-4 text-neutral-300 leading-relaxed"><strong>12.4.2</strong> Mirai Stack reserves the right to suspend Accounts of Users who abuse chargeback mechanisms.</p>
                    <p className="mb-4 text-neutral-300 leading-relaxed"><strong>12.5</strong> CPA Compliance:</p>
                    <p className="mb-4 text-neutral-300 leading-relaxed"><strong>12.5.1</strong> All refund and return policies comply with the Consumer Protection Act 68 of 2008.</p>
                    <p className="mb-4 text-neutral-300 leading-relaxed"><strong>12.5.2</strong> Nothing in these Terms and Conditions limits any consumer rights that cannot be excluded under the CPA.</p>
                    <hr className="my-12 border-brand-border" />
                    <h2 className="text-2xl font-bold text-white mb-6 mt-12">13. CONTENT OWNERSHIP AND USER-GENERATED CONTENT</h2>
                    <p className="mb-4 text-neutral-300 leading-relaxed"><strong>13.1</strong> Mirai Stack Content:</p>
                    <p className="mb-4 text-neutral-300 leading-relaxed"><strong>13.1.1</strong> All Content provided by Mirai Stack on the Platforms is owned by or licensed to us.</p>
                    <p className="mb-4 text-neutral-300 leading-relaxed"><strong>13.1.2</strong> Such Content is protected by copyright, trademark, and other Intellectual Property laws.</p>
                    <p className="mb-4 text-neutral-300 leading-relaxed"><strong>13.2</strong> User-Generated Content:</p>
                    <p className="mb-4 text-neutral-300 leading-relaxed"><strong>13.2.1</strong> You retain ownership of any Content you create, upload, or post on the Platforms.</p>
                    <p className="mb-4 text-neutral-300 leading-relaxed"><strong>13.2.2</strong> By posting Content, you grant Mirai Stack a worldwide, non-exclusive, royalty-free, sublicensable, and transferable license to use, reproduce, distribute, prepare derivative works of, display, and perform your Content in connection with the operation of the Platforms and Mirai Stack's business.</p>
                    <p className="mb-4 text-neutral-300 leading-relaxed"><strong>13.2.3</strong> This license persists even if you stop using the Platforms, though we will cease commercial exploitation of your Content upon reasonable request following Account termination.</p>
                    <p className="mb-4 text-neutral-300 leading-relaxed"><strong>13.3</strong> Content Representations:</p>
                    <p className="mb-4 text-neutral-300 leading-relaxed"><strong>13.3.1</strong> You represent and warrant that:<br />
                        - You own or have the necessary rights to post your Content;<br />
                        - Your Content does not violate the rights of any third party;<br />
                        - Your Content complies with these Terms and Conditions and Applicable Law.</p>
                    <p className="mb-4 text-neutral-300 leading-relaxed"><strong>13.4</strong> Content Moderation:</p>
                    <p className="mb-4 text-neutral-300 leading-relaxed"><strong>13.4.1</strong> Mirai Stack does not pre-screen all User-Generated Content but reserves the right to remove any Content that violates these Terms and Conditions.</p>
                    <p className="mb-4 text-neutral-300 leading-relaxed"><strong>13.4.2</strong> We may use automated tools to detect and remove prohibited Content.</p>
                    <p className="mb-4 text-neutral-300 leading-relaxed"><strong>13.5</strong> AI-Generated Content (KenganStudy):</p>
                    <p className="mb-4 text-neutral-300 leading-relaxed"><strong>13.5.1</strong> Content generated by AI features in KenganStudy is provided for educational purposes.</p>
                    <p className="mb-4 text-neutral-300 leading-relaxed"><strong>13.5.2</strong> You acknowledge that AI-generated content may not always be accurate or appropriate for your specific needs.</p>
                    <p className="mb-4 text-neutral-300 leading-relaxed"><strong>13.5.3</strong> Mirai Stack does not claim ownership of AI-generated content created for you, subject to the license in Section 13.2.2.</p>
                    <hr className="my-12 border-brand-border" />
                    <h2 className="text-2xl font-bold text-white mb-6 mt-12">14. PRIVACY AND DATA PROTECTION</h2>
                    <p className="mb-4 text-neutral-300 leading-relaxed"><strong>14.1</strong> POPIA Compliance:</p>
                    <p className="mb-4 text-neutral-300 leading-relaxed"><strong>14.1.1</strong> Mirai Stack is committed to protecting your Personal Information in accordance with POPIA.</p>
                    <p className="mb-4 text-neutral-300 leading-relaxed"><strong>14.1.2</strong> Our Privacy Policy, available at [Privacy Policy URL], forms part of these Terms and Conditions.</p>
                    <p className="mb-4 text-neutral-300 leading-relaxed"><strong>14.2</strong> Information Officer:</p>
                    <p className="mb-4 text-neutral-300 leading-relaxed"><strong>14.2.1</strong> Mirai Stack has designated an Information Officer responsible for POPIA compliance.</p>
                    <p className="mb-4 text-neutral-300 leading-relaxed"><strong>14.2.2</strong> The Information Officer can be contacted at info@miraistack.co.za.</p>
                    <p className="mb-4 text-neutral-300 leading-relaxed"><strong>14.3</strong> Data Processing:</p>
                    <p className="mb-4 text-neutral-300 leading-relaxed"><strong>14.3.1</strong> By using the Platforms, you consent to the collection, processing, and storage of your Personal Information as described in our Privacy Policy.</p>
                    <p className="mb-4 text-neutral-300 leading-relaxed"><strong>14.3.2</strong> We process Personal Information only for lawful purposes compatible with the original purpose of collection.</p>
                    <p className="mb-4 text-neutral-300 leading-relaxed"><strong>14.4</strong> Data Subject Rights:</p>
                    <p className="mb-4 text-neutral-300 leading-relaxed"><strong>14.4.1</strong> Under POPIA, you have the right to:<br />
                        - Request access to your Personal Information;<br />
                        - Request correction or deletion of your Personal Information;<br />
                        - Object to processing of your Personal Information;<br />
                        - Lodge a complaint with the Information Regulator.</p>
                    <p className="mb-4 text-neutral-300 leading-relaxed"><strong>14.5</strong> Cross-Border Transfers:</p>
                    <p className="mb-4 text-neutral-300 leading-relaxed"><strong>14.5.1</strong> Some of our service providers may process data outside South Africa.</p>
                    <p className="mb-4 text-neutral-300 leading-relaxed"><strong>14.5.2</strong> We ensure that appropriate safeguards are in place for such transfers in compliance with POPIA.</p>
                    <p className="mb-4 text-neutral-300 leading-relaxed"><strong>14.6</strong> Data Retention:</p>
                    <p className="mb-4 text-neutral-300 leading-relaxed"><strong>14.6.1</strong> We retain Personal Information only for as long as necessary to fulfill the purposes for which it was collected, or as required by Applicable Law.</p>
                    <p className="mb-4 text-neutral-300 leading-relaxed"><strong>14.6.2</strong> Upon Account deletion, we will delete or anonymize your Personal Information, except where retention is required by law or for legitimate business purposes.</p>
                    <hr className="my-12 border-brand-border" />
                    <h2 className="text-2xl font-bold text-white mb-6 mt-12">15. DATA SECURITY AND STORAGE</h2>
                    <p className="mb-4 text-neutral-300 leading-relaxed"><strong>15.1</strong> Security Measures:</p>
                    <p className="mb-4 text-neutral-300 leading-relaxed"><strong>15.1.1</strong> Mirai Stack implements appropriate technical and organizational measures to protect your data against unauthorized access, alteration, disclosure, or destruction.</p>
                    <p className="mb-4 text-neutral-300 leading-relaxed"><strong>15.1.2</strong> These measures include encryption, access controls, secure development practices, and regular security assessments.</p>
                    <p className="mb-4 text-neutral-300 leading-relaxed"><strong>15.2</strong> Security Limitations:</p>
                    <p className="mb-4 text-neutral-300 leading-relaxed"><strong>15.2.1</strong> While we strive to protect your data, no internet transmission or electronic storage is completely secure.</p>
                    <p className="mb-4 text-neutral-300 leading-relaxed"><strong>15.2.2</strong> You acknowledge that you provide your Personal Information at your own risk.</p>
                    <p className="mb-4 text-neutral-300 leading-relaxed"><strong>15.3</strong> Breach Notification:</p>
                    <p className="mb-4 text-neutral-300 leading-relaxed"><strong>15.3.1</strong> In the event of a data breach affecting your Personal Information, we will notify you and the Information Regulator as required by POPIA.</p>
                    <p className="mb-4 text-neutral-300 leading-relaxed"><strong>15.3.2</strong> Notification will occur without undue delay after becoming aware of the breach.</p>
                    <p className="mb-4 text-neutral-300 leading-relaxed"><strong>15.4</strong> User Security Responsibilities:</p>
                    <p className="mb-4 text-neutral-300 leading-relaxed"><strong>15.4.1</strong> You are responsible for maintaining the security of your Account credentials.</p>
                    <p className="mb-4 text-neutral-300 leading-relaxed"><strong>15.4.2</strong> You must use strong, unique passwords and enable two-factor authentication where available.</p>
                    <hr className="my-12 border-brand-border" />
                    <h2 className="text-2xl font-bold text-white mb-6 mt-12">16. LIMITATION OF LIABILITY</h2>
                    <p className="mb-4 text-neutral-300 leading-relaxed"><strong>16.1</strong> To the fullest extent permitted by Applicable Law:</p>
                    <p className="mb-4 text-neutral-300 leading-relaxed"><strong>16.1.1</strong> Mirai Stack provides the Platforms and Services on an "as is" and "as available" basis without warranties of any kind, either express or implied.</p>
                    <p className="mb-4 text-neutral-300 leading-relaxed"><strong>16.1.2</strong> We do not warrant that the Platforms will meet your requirements, be uninterrupted, timely, secure, or error-free.</p>
                    <p className="mb-4 text-neutral-300 leading-relaxed"><strong>16.2</strong> Exclusion of Liability:</p>
                    <p className="mb-4 text-neutral-300 leading-relaxed"><strong>16.2.1</strong> Mirai Stack shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including but not limited to loss of profits, data, use, goodwill, or other intangible losses.</p>
                    <p className="mb-4 text-neutral-300 leading-relaxed"><strong>16.2.2</strong> Our total liability for any claim arising from these Terms and Conditions shall not exceed the amount you paid to Mirai Stack in the 12 months preceding the claim, or R1,000.00 (One Thousand South African Rand), whichever is greater.</p>
                    <p className="mb-4 text-neutral-300 leading-relaxed"><strong>16.3</strong> Exceptions:</p>
                    <p className="mb-4 text-neutral-300 leading-relaxed"><strong>16.3.1</strong> Nothing in these Terms and Conditions excludes or limits liability for:<br />
                        - Fraud or fraudulent misrepresentation;<br />
                        - Death or personal injury caused by negligence;<br />
                        - Any other liability that cannot be excluded under Applicable Law.</p>
                    <p className="mb-4 text-neutral-300 leading-relaxed"><strong>16.4</strong> Platform-Specific Disclaimers:</p>
                    <p className="mb-4 text-neutral-300 leading-relaxed"><strong>16.4.1</strong> FitSocial: Mirai Stack is not responsible for any injuries, health issues, or damages resulting from fitness activities undertaken based on Platform content.</p>
                    <p className="mb-4 text-neutral-300 leading-relaxed"><strong>16.4.2</strong> KenganStudy: AI-generated educational content is provided for informational purposes only and does not constitute professional educational advice.</p>
                    <p className="mb-4 text-neutral-300 leading-relaxed"><strong>16.4.3</strong> Marketplace Platforms: Mirai Stack is not liable for the quality, safety, or legality of products sold by Sellers.</p>
                    <hr className="my-12 border-brand-border" />
                    <h2 className="text-2xl font-bold text-white mb-6 mt-12">17. INDEMNIFICATION</h2>
                    <p className="mb-4 text-neutral-300 leading-relaxed"><strong>17.1</strong> You agree to indemnify, defend, and hold harmless Mirai Stack, its officers, directors, employees, agents, and affiliates from and against any and all claims, liabilities, damages, losses, costs, expenses, or fees (including reasonable attorneys' fees) arising from:</p>
                    <p className="mb-4 text-neutral-300 leading-relaxed"><strong>17.1.1</strong> Your use of the Platforms or Services;</p>
                    <p className="mb-4 text-neutral-300 leading-relaxed"><strong>17.1.2</strong> Your violation of these Terms and Conditions;</p>
                    <p className="mb-4 text-neutral-300 leading-relaxed"><strong>17.1.3</strong> Your violation of any rights of another party, including Intellectual Property rights;</p>
                    <p className="mb-4 text-neutral-300 leading-relaxed"><strong>17.1.4</strong> Your violation of any Applicable Law;</p>
                    <p className="mb-4 text-neutral-300 leading-relaxed"><strong>17.1.5</strong> Any Content you post or transmit through the Platforms.</p>
                    <p className="mb-4 text-neutral-300 leading-relaxed"><strong>17.2</strong> Mirai Stack reserves the right to assume the exclusive defense and control of any matter subject to indemnification by you, in which event you will cooperate with us in asserting any available defenses.</p>
                    <hr className="my-12 border-brand-border" />
                    <h2 className="text-2xl font-bold text-white mb-6 mt-12">18. THIRD-PARTY SERVICES AND INTEGRATIONS</h2>
                    <p className="mb-4 text-neutral-300 leading-relaxed"><strong>18.1</strong> The Mirai Stack Platforms may integrate with or contain links to third-party services, websites, or applications.</p>
                    <p className="mb-4 text-neutral-300 leading-relaxed"><strong>18.2</strong> Mirai Stack does not control and is not responsible for the content, privacy policies, or practices of any third-party services.</p>
                    <p className="mb-4 text-neutral-300 leading-relaxed"><strong>18.3</strong> Your use of third-party services is subject to their respective terms and conditions.</p>
                    <p className="mb-4 text-neutral-300 leading-relaxed"><strong>18.4</strong> Social Media Integrations (KenganSocial):</p>
                    <p className="mb-4 text-neutral-300 leading-relaxed"><strong>18.4.1</strong> KenganSocial integrates with third-party social media platforms.</p>
                    <p className="mb-4 text-neutral-300 leading-relaxed"><strong>18.4.2</strong> Your use of these integrations is subject to the terms of service of the respective social media platforms.</p>
                    <p className="mb-4 text-neutral-300 leading-relaxed"><strong>18.4.3</strong> Mirai Stack is not responsible for changes to third-party APIs or service discontinuations.</p>
                    <p className="mb-4 text-neutral-300 leading-relaxed"><strong>18.5</strong> AI Service Providers (KenganStudy):</p>
                    <p className="mb-4 text-neutral-300 leading-relaxed"><strong>18.5.1</strong> KenganStudy may utilize third-party AI and machine learning services.</p>
                    <p className="mb-4 text-neutral-300 leading-relaxed"><strong>18.5.2</strong> Data processed by these services is subject to their respective privacy and security standards.</p>
                    <hr className="my-12 border-brand-border" />
                    <h2 className="text-2xl font-bold text-white mb-6 mt-12">19. SERVICE AVAILABILITY AND MODIFICATIONS</h2>
                    <p className="mb-4 text-neutral-300 leading-relaxed"><strong>19.1</strong> Service Availability:</p>
                    <p className="mb-4 text-neutral-300 leading-relaxed"><strong>19.1.1</strong> Mirai Stack aims to maintain high availability of the Platforms but does not guarantee uninterrupted access.</p>
                    <p className="mb-4 text-neutral-300 leading-relaxed"><strong>19.1.2</strong> Scheduled maintenance may result in temporary service interruptions. We will endeavor to provide advance notice of scheduled maintenance.</p>
                    <p className="mb-4 text-neutral-300 leading-relaxed"><strong>19.2</strong> Modifications to Services:</p>
                    <p className="mb-4 text-neutral-300 leading-relaxed"><strong>19.2.1</strong> Mirai Stack reserves the right to modify, suspend, or discontinue any Platform or Service at any time, with or without notice.</p>
                    <p className="mb-4 text-neutral-300 leading-relaxed"><strong>19.2.2</strong> We may add or remove features, change functionality, or modify user interfaces.</p>
                    <p className="mb-4 text-neutral-300 leading-relaxed"><strong>19.2.3</strong> We are not liable to you or any third party for any modification, suspension, or discontinuation of the Services.</p>
                    <p className="mb-4 text-neutral-300 leading-relaxed"><strong>19.3</strong> Force Majeure:</p>
                    <p className="mb-4 text-neutral-300 leading-relaxed"><strong>19.3.1</strong> Mirai Stack shall not be liable for any failure or delay in performance due to circumstances beyond our reasonable control, including but not limited to acts of God, war, terrorism, riots, embargoes, acts of civil or military authorities, fire, floods, accidents, strikes, or shortages of transportation, facilities, fuel, energy, labor, or materials.</p>
                    <hr className="my-12 border-brand-border" />
                    <h2 className="text-2xl font-bold text-white mb-6 mt-12">20. SUSPENSION AND TERMINATION OF ACCOUNTS</h2>
                    <p className="mb-4 text-neutral-300 leading-relaxed"><strong>20.1</strong> Termination by User:</p>
                    <p className="mb-4 text-neutral-300 leading-relaxed"><strong>20.1.1</strong> You may terminate your Account at any time by following the Account deletion process or contacting us.</p>
                    <p className="mb-4 text-neutral-300 leading-relaxed"><strong>20.1.2</strong> Termination does not relieve you of obligations incurred prior to termination.</p>
                    <p className="mb-4 text-neutral-300 leading-relaxed"><strong>20.2</strong> Suspension and Termination by Mirai Stack:</p>
                    <p className="mb-4 text-neutral-300 leading-relaxed"><strong>20.2.1</strong> We may suspend or terminate your Account immediately and without prior notice if:<br />
                        - You violate these Terms and Conditions;<br />
                        - You engage in fraudulent or illegal activity;<br />
                        - Your conduct poses a risk to other Users or Mirai Stack;<br />
                        - You fail to pay amounts due;<br />
                        - Required by Applicable Law.</p>
                    <p className="mb-4 text-neutral-300 leading-relaxed"><strong>20.3</strong> Effects of Termination:</p>
                    <p className="mb-4 text-neutral-300 leading-relaxed"><strong>20.3.1</strong> Upon termination, your right to use the Platforms ceases immediately.</p>
                    <p className="mb-4 text-neutral-300 leading-relaxed"><strong>20.3.2</strong> All provisions of these Terms and Conditions which by their nature should survive termination shall survive, including Intellectual Property provisions, indemnification, limitation of liability, and dispute resolution.</p>
                    <p className="mb-4 text-neutral-300 leading-relaxed"><strong>20.3.3</strong> We may retain certain data as required by Applicable Law or for legitimate business purposes.</p>
                    <hr className="my-12 border-brand-border" />
                    <h2 className="text-2xl font-bold text-white mb-6 mt-12">21. GOVERNING LAW AND JURISDICTION</h2>
                    <p className="mb-4 text-neutral-300 leading-relaxed"><strong>21.1</strong> These Terms and Conditions shall be governed by and construed in accordance with the laws of the Republic of South Africa.</p>
                    <p className="mb-4 text-neutral-300 leading-relaxed"><strong>21.2</strong> Any dispute arising from these Terms and Conditions shall be subject to the exclusive jurisdiction of the courts of South Africa.</p>
                    <p className="mb-4 text-neutral-300 leading-relaxed"><strong>21.3</strong> Specifically, disputes shall be submitted to the competent courts in Durban, KwaZulu-Natal, South Africa.</p>
                    <p className="mb-4 text-neutral-300 leading-relaxed"><strong>21.4</strong> Notwithstanding the above, Mirai Stack may seek injunctive or other equitable relief in any jurisdiction to prevent irreparable harm.</p>
                    <hr className="my-12 border-brand-border" />
                    <h2 className="text-2xl font-bold text-white mb-6 mt-12">22. DISPUTE RESOLUTION PROCEDURES</h2>
                    <p className="mb-4 text-neutral-300 leading-relaxed"><strong>22.1</strong> Informal Resolution:</p>
                    <p className="mb-4 text-neutral-300 leading-relaxed"><strong>22.1.1</strong> Before initiating formal legal proceedings, you agree to attempt to resolve any dispute informally by contacting Mirai Stack at info@miraistack.co.za.</p>
                    <p className="mb-4 text-neutral-300 leading-relaxed"><strong>22.1.2</strong> We will attempt to resolve disputes within 30 days of receiving notice.</p>
                    <p className="mb-4 text-neutral-300 leading-relaxed"><strong>22.2</strong> Mediation:</p>
                    <p className="mb-4 text-neutral-300 leading-relaxed"><strong>22.2.1</strong> If informal resolution fails, parties agree to attempt mediation under the rules of the Arbitration Foundation of Southern Africa (AFSA).</p>
                    <p className="mb-4 text-neutral-300 leading-relaxed"><strong>22.2.2</strong> Mediation shall take place in Durban, South Africa.</p>
                    <p className="mb-4 text-neutral-300 leading-relaxed"><strong>22.3</strong> Arbitration:</p>
                    <p className="mb-4 text-neutral-300 leading-relaxed"><strong>22.3.1</strong> If mediation fails, disputes shall be finally resolved by arbitration under AFSA rules.</p>
                    <p className="mb-4 text-neutral-300 leading-relaxed"><strong>22.3.2</strong> Arbitration shall be conducted in English in Durban, South Africa.</p>
                    <p className="mb-4 text-neutral-300 leading-relaxed"><strong>22.3.3</strong> The arbitrator's decision shall be final and binding.</p>
                    <p className="mb-4 text-neutral-300 leading-relaxed"><strong>22.4</strong> Class Action Waiver:</p>
                    <p className="mb-4 text-neutral-300 leading-relaxed"><strong>22.4.1</strong> You agree that any proceedings will be conducted only on an individual basis and not in a class, consolidated, or representative action.</p>
                    <p className="mb-4 text-neutral-300 leading-relaxed"><strong>22.5</strong> Exceptions:</p>
                    <p className="mb-4 text-neutral-300 leading-relaxed"><strong>22.5.1</strong> Either party may seek urgent interdictory relief from a court of competent jurisdiction without first exhausting mediation or arbitration.</p>
                    <hr className="my-12 border-brand-border" />
                    <h2 className="text-2xl font-bold text-white mb-6 mt-12">23. COMPLIANCE WITH SOUTH AFRICAN DIGITAL REGULATIONS</h2>
                    <p className="mb-4 text-neutral-300 leading-relaxed"><strong>23.1</strong> ECTA Compliance:</p>
                    <p className="mb-4 text-neutral-300 leading-relaxed"><strong>23.1.1</strong> These Terms and Conditions constitute an electronic agreement as defined in ECTA.</p>
                    <p className="mb-4 text-neutral-300 leading-relaxed"><strong>23.1.2</strong> Data messages exchanged between you and Mirai Stack satisfy the writing requirement under ECTA.</p>
                    <p className="mb-4 text-neutral-300 leading-relaxed"><strong>23.1.3</strong> Electronic signatures and authentication methods used comply with ECTA requirements.</p>
                    <p className="mb-4 text-neutral-300 leading-relaxed"><strong>23.2</strong> CPA Compliance:</p>
                    <p className="mb-4 text-neutral-300 leading-relaxed"><strong>23.2.1</strong> These Terms and Conditions comply with the Consumer Protection Act 68 of 2008.</p>
                    <p className="mb-4 text-neutral-300 leading-relaxed"><strong>23.2.2</strong> Where you are a consumer under the CPA, nothing in these Terms and Conditions excludes your statutory rights.</p>
                    <p className="mb-4 text-neutral-300 leading-relaxed"><strong>23.2.3</strong> Notices required under the CPA are provided through the Platforms and via email.</p>
                    <p className="mb-4 text-neutral-300 leading-relaxed"><strong>23.3</strong> POPIA Compliance:</p>
                    <p className="mb-4 text-neutral-300 leading-relaxed"><strong>23.3.1</strong> Mirai Stack is a responsible party as defined in POPIA.</p>
                    <p className="mb-4 text-neutral-300 leading-relaxed"><strong>23.3.2</strong> We have implemented appropriate measures to comply with POPIA's conditions for lawful processing of Personal Information.</p>
                    <p className="mb-4 text-neutral-300 leading-relaxed"><strong>23.4</strong> Cybercrimes Act:</p>
                    <p className="mb-4 text-neutral-300 leading-relaxed"><strong>23.4.1</strong> Users are prohibited from using the Platforms for any activities prohibited by the Cybercrimes Act 19 of 2020.</p>
                    <p className="mb-4 text-neutral-300 leading-relaxed"><strong>23.4.2</strong> Mirai Stack will cooperate with law enforcement in investigating cybercrime.</p>
                    <hr className="my-12 border-brand-border" />
                    <h2 className="text-2xl font-bold text-white mb-6 mt-12">24. CHANGES TO THE TERMS AND CONDITIONS</h2>
                    <p className="mb-4 text-neutral-300 leading-relaxed"><strong>24.1</strong> Mirai Stack reserves the right to modify these Terms and Conditions at any time.</p>
                    <p className="mb-4 text-neutral-300 leading-relaxed"><strong>24.2</strong> Changes will be effective immediately upon posting on the Platforms, with the updated effective date.</p>
                    <p className="mb-4 text-neutral-300 leading-relaxed"><strong>24.3</strong> Material changes will be notified to Users via email or prominent notice on the Platforms at least 30 days before becoming effective.</p>
                    <p className="mb-4 text-neutral-300 leading-relaxed"><strong>24.4</strong> Your continued use of the Platforms after changes constitutes acceptance of the modified Terms and Conditions.</p>
                    <p className="mb-4 text-neutral-300 leading-relaxed"><strong>24.5</strong> If you do not agree to the changes, you must stop using the Platforms and terminate your Account.</p>
                    <hr className="my-12 border-brand-border" />
                    <h2 className="text-2xl font-bold text-white mb-6 mt-12">25. CONTACT INFORMATION AND LEGAL NOTICES</h2>
                    <p className="mb-4 text-neutral-300 leading-relaxed"><strong>25.1</strong> Legal Entity:</p>
                    <p className="mb-4 text-neutral-300 leading-relaxed"><strong>Mirai Stack (Pty) Ltd</strong><br />
                        Principal Place of Business: Durban, South Africa<br />
                        Email: info@miraistack.co.za</p>
                    <p className="mb-4 text-neutral-300 leading-relaxed"><strong>25.2</strong> Legal Notices:</p>
                    <p className="mb-4 text-neutral-300 leading-relaxed"><strong>25.2.1</strong> All legal notices to Mirai Stack must be sent to info@miraistack.co.za</p>
                    <p className="mb-4 text-neutral-300 leading-relaxed"><strong>25.2.2</strong> Notices will be deemed received when acknowledged by Mirai Stack or within 48 hours of sending if no acknowledgment is received.</p>
                    <p className="mb-4 text-neutral-300 leading-relaxed"><strong>25.3</strong> General Inquiries:</p>
                    <p className="mb-4 text-neutral-300 leading-relaxed">For general inquiries, support, or customer service, please contact info@miraistack.co.za</p>
                    <p className="mb-4 text-neutral-300 leading-relaxed"><strong>25.4</strong> Regulatory Compliance:</p>
                    <p className="mb-4 text-neutral-300 leading-relaxed"><strong>25.4.1</strong> Information Officer: Contactable at info@miraistack.co.za for POPIA-related inquiries.</p>
                    <p className="mb-4 text-neutral-300 leading-relaxed"><strong>25.4.2</strong> Complaints regarding data protection may be lodged with the Information Regulator of South Africa.</p>
                    <hr className="my-12 border-brand-border" />
                    <h2 className="text-2xl font-bold text-white mb-6 mt-12">SCHEDULE A: PLATFORM-SPECIFIC SUPPLEMENTARY TERMS</h2>
                    <p className="mb-4 text-neutral-300 leading-relaxed"><strong>A.1 Prosoche (Reflective Intelligence Platform)</strong></p>
                    <p className="mb-4 text-neutral-300 leading-relaxed"><strong>A.1.1</strong> Prosoche is designed for personal reflection and mindfulness practices.</p>
                    <p className="mb-4 text-neutral-300 leading-relaxed"><strong>A.1.2</strong> The platform does not provide medical, psychological, or psychiatric advice.</p>
                    <p className="mb-4 text-neutral-300 leading-relaxed"><strong>A.1.3</strong> If you are experiencing mental health crises, please contact a qualified healthcare professional or emergency services.</p>
                    <p className="mb-4 text-neutral-300 leading-relaxed"><strong>A.2 Agora (Digital Publishing Platform)</strong></p>
                    <p className="mb-4 text-neutral-300 leading-relaxed"><strong>A.2.1</strong> Writers retain copyright in their original works published on Agora.</p>
                    <p className="mb-4 text-neutral-300 leading-relaxed"><strong>A.2.2</strong> By publishing on Agora, you grant Mirai Stack a license to display, distribute, and promote your content on the platform.</p>
                    <p className="mb-4 text-neutral-300 leading-relaxed"><strong>A.2.3</strong> Mirai Stack does not guarantee any specific audience size or monetization results.</p>
                    <p className="mb-4 text-neutral-300 leading-relaxed"><strong>A.3 FitSocial (Community-Driven Fitness Platform)</strong></p>
                    <p className="mb-4 text-neutral-300 leading-relaxed"><strong>A.3.1</strong> Users participate in fitness activities at their own risk.</p>
                    <p className="mb-4 text-neutral-300 leading-relaxed"><strong>A.3.2</strong> Consult a physician before beginning any exercise program.</p>
                    <p className="mb-4 text-neutral-300 leading-relaxed"><strong>A.3.3</strong> User-generated fitness content does not constitute professional training advice.</p>
                    <p className="mb-4 text-neutral-300 leading-relaxed"><strong>A.4 The Connect (Multi-Vendor Marketplace Platform)</strong></p>
                    <p className="mb-4 text-neutral-300 leading-relaxed"><strong>A.4.1</strong> Mirai Stack charges commission fees on transactions as specified in Seller agreements.</p>
                    <p className="mb-4 text-neutral-300 leading-relaxed"><strong>A.4.2</strong> Sellers are independent contractors and not employees or agents of Mirai Stack.</p>
                    <p className="mb-4 text-neutral-300 leading-relaxed"><strong>A.4.3</strong> Mirai Stack reserves the right to delist Sellers who violate platform policies.</p>
                    <p className="mb-4 text-neutral-300 leading-relaxed"><strong>A.5 Stitches (Global Fashion Commerce Platform)</strong></p>
                    <p className="mb-4 text-neutral-300 leading-relaxed"><strong>A.5.1</strong> International transactions may be subject to customs duties, import taxes, and shipping delays.</p>
                    <p className="mb-4 text-neutral-300 leading-relaxed"><strong>A.5.2</strong> Sizing and fit information is provided by Sellers; Mirai Stack is not responsible for sizing discrepancies.</p>
                    <p className="mb-4 text-neutral-300 leading-relaxed"><strong>A.6 KenganStudy (AI-Enhanced Learning Ecosystem)</strong></p>
                    <p className="mb-4 text-neutral-300 leading-relaxed"><strong>A.6.1</strong> AI-generated content is provided "as is" without warranties of accuracy or completeness.</p>
                    <p className="mb-4 text-neutral-300 leading-relaxed"><strong>A.6.2</strong> Mirai Stack does not guarantee specific educational outcomes or results.</p>
                    <p className="mb-4 text-neutral-300 leading-relaxed"><strong>A.6.3</strong> Personal data used to personalize learning experiences is processed in accordance with Section 14.</p>
                    <p className="mb-4 text-neutral-300 leading-relaxed"><strong>A.7 KenganSocial (SaaS Social Media Management)</strong></p>
                    <p className="mb-4 text-neutral-300 leading-relaxed"><strong>A.7.1</strong> Users must comply with the terms of service of third-party social media platforms.</p>
                    <p className="mb-4 text-neutral-300 leading-relaxed"><strong>A.7.2</strong> Mirai Stack is not responsible for account suspensions or restrictions imposed by social media platforms.</p>
                    <p className="mb-4 text-neutral-300 leading-relaxed"><strong>A.7.3</strong> Automation features must be used in compliance with platform-specific rate limits and policies.</p>
                    <hr className="my-12 border-brand-border" />
                    <p className="mb-4 text-neutral-300 leading-relaxed"><strong>ACKNOWLEDGMENT</strong></p>
                    <p className="mb-4 text-neutral-300 leading-relaxed">BY ACCESSING OR USING ANY MIRAI STACK PLATFORM OR SERVICE, YOU ACKNOWLEDGE THAT YOU HAVE READ, UNDERSTOOD, AND AGREE TO BE BOUND BY THESE TERMS AND CONDITIONS.</p>
                    <p className="mb-4 text-neutral-300 leading-relaxed"><strong>Last Updated: 04 March 2026</strong></p>
                    <hr className="my-12 border-brand-border" />
                    <p className="mb-4 text-neutral-300 leading-relaxed"><em>© 2026 Mirai Stack (Pty) Ltd. All rights reserved.</em></p>
                </div>
            </main>

            <Footer />
        </div>
    );
}
