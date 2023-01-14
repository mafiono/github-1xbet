import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Col, Row } from 'reactstrap'

export class About extends Component {
    render() {
        return (
            <div className='justify-content-center d-flex'>
                <Row className='ml-0 mr-0 pt-2' style={{maxWidth:'1200px', width:'100%'}}>
                    <Col sm='12' className='mt-1'>
                        <h1 className='d-flex justify-content-start'>Privacy Policy</h1>
                    </Col>
                    <Col sm='12' className='mt-4 mb-5'>
                        <p>
                            We know that you care how information about you is used and it’s important to us that you feel comfortable and trust us with your information when you use our Services. Our Privacy Policy ("Privacy Policy") helps explain our information practices, including the information we process to support our Services, e.g. what information we collect and how this affects you, what steps we take to protect your privacy etc. Please take a few minutes to read this Privacy Policy, so that you understand what information we collect, what we do with it and why.
                            <br/><br/>Scope and Consent<br/>
                            <br/>We collect personal information from you and any devices you use when you use our Services or Website, register for an account with us, provide us information on a web form, update or add information to your account, or when you otherwise correspond with us.
                            <br/><br/>Some of this personal information, such as a way to identify you, is necessary to enter into a binding legal agreement with us, participate in the games or make payments for Services available on the Website.
                            <br/><br/>By visiting, registering with us or logging on with us on the Website and providing us with personal information, you explicitly accept and consent to Abudantia B.V. (“Company”) collecting, processing and disclosing your personal information for the purposes set out in this Privacy Policy. If you do not agree with the terms of our Privacy Policy, please do not provide any personal information to us, do not use or register on the Website.
                            <br/><br/>If you refuse or withdraw your consent, or if you choose not to provide us with any personal information, we may not be able to provide you with the Services that can be offered on our Website. Consent can be withdrawn at any time by sending a request to support@kasino.com or deleting your account. Please note that we may also rely on legitimate interests or fulfillment of a contract to continue processing your personal information.
                            <br/><br/>By using our Service, you are also agreeing to our Terms and Conditions. Please make sure you read and agree with our Terms and Conditions if you want to use our Services.
                            <br/><br/>Any personal information provided to or gathered by us is controlled by Abudantia B.V., a limited liability company registered in Curacao with registration number 126608 and registered address at Heelsumstraat 51 E-Commerce Park, Curacao, acting as a data controller. Abudantia B.V. holds a sublicense # 8048/JAZ2014-034 issued by Antillephone N.V., which has been established under the laws of Curaçao.
                            <br/><br/>Personal Information We Collect
                            <br/><br/>The personal information and data that we collect and process about you include the following:
                            <br/><br/>(a) information and documents provided to us upon registration of the player account (such as name, surname, e-mail address, phone number, residential address and date of birth) and in the course of KYC & due diligence procedures;
                            <br/><br/>(b) information about the games you participate in via our Website;
                            <br/><br/>(c) details of the transactions you carry out with us via the Website or Services;
                            <br/><br/>(d) details of your visits to the Website including, but not limited to, traffic data, location data, weblogs and other communication data;
                            <br/><br/>(e) records of your correspondence with us, whether via the Website, live-chat, e-mail or other means of communication;
                            <br/><br/>(f) information provided in customer surveys or other forms of customer research;
                            <br/><br/>(g) any other information that you submit to us via the Website or e-mail
                            <br/><br/>We reserve the right to record all calls, internet communications and details of transactions you carry out through the Website
                            <br/><br/>How We Use Your Personal informatio
                            <br/><br/>We use the personal information we collect from you for a scope of different business purposes and according to different legal grounds of processing
                            <br/><br/>We may collect and process your personal information for the purposes of
                            <br/><br/>(a) registering you on the Website, creating your user account, creating your profile and to enable you an access and use of the Website and Services
                            <br/><br/>(b) allowing you to participate in the games available on the Website
                            <br/><br/>(c) processing your payments
                            <br/><br/>(d) providing customer service, giving you information about your account, responding to your requests
                            <br/><br/>(e) improving our Services by using log information and usage information to better understand network behavior and trends, detect potential outages and technical issues
                            <br/><br/>(f) providing you with ancillary services
                            <br/><br/>(g) preventing, detecting and investigating fraud, security breaches, potentially prohibited or illegal activities, as well as for enforcement of law and our Terms and Conditions
                            <br/><br/>(h) conducting risk assessment activity including but not limited to anti-money laundering and player protection obligations as may be required by applicable EU or regional legislation
                            <br/><br/>(i) carrying out operations necessary to enable the foregoing
                            <br/><br/>We may also use your personal data to inform you of changes on the Website, new services available and promotions that you may find interesting. If you do not wish to receive such direct marketing material, you may opt-out of such communications by following the instructions contained therein
                            <br/><br/>We may use and publish your user name and/or first name and/or first letter of last name and/or region for promotional purposes. You may withdraw your consent for this by contacting support@kasino9.com. Further details are contained in our Marketing Policy
                            <br/><br/>Retention of Your Personal Informatio
                            <br/><br/>We may keep your personal information for no longer than necessary for the purposes for which the personal information is processed
                            <br/><br/>The length of time we retain personal information for depends on the purposes for which we collect and use it and/or as required to comply with applicable laws and to establish, exercise or defend our legal or contractual rights. When data is no longer required to be kept, it will be destroyed
                            <br/><br/>How Do We Protect Your Personal Informatio
                            <br/><br/>We are committed to protecting your personal information and respecting your privacy. We will ensure that your personal information is processed fairly, lawfully and in accordance with your rights and that the data collected is adequate, relevant and not excessive for the purposes specified in this Privacy Policy
                            <br/><br/>We commit to protect your personal data in accordance with best business practices and applicable laws. We assure you that your personal information is kept by us in a secure manner. We maintain appropriate technical and organisational measures to prevent your data from being processed in an unauthorised or unlawful way
                            <br/><br/>We employ security protocols to ensure that all transactions including deposits and withdrawals are carried out in a totally secure manner
                            <br/><br/>How We Might Share Your Personal informatio
                            <br/><br/>We may share your personal information with our employees, affiliates or third party providers under certain contracts. This disclosure may be required for us to provide you access to our Services, to comply with our legal obligations, to enforce our Terms and Conditions, to facilitate our marketing and advertising activities, or to prevent, detect, mitigate, and investigate fraudulent or illegal activities related to our Services. We attempt to minimize the amount of personal information we disclose to what is directly relevant and necessary to accomplish the specified purpose. We do not sell, rent, or otherwise disclose your personal information to third parties for their marketing and advertising purposes without your consent
                            <br/><br/>The employees who have access to, or are associated with the processing of your personal information, are obliged to respect the confidential nature of your information pursuant to applicable data protection and privacy laws
                            <br/><br/>The following categories of staff of the Company will have access to your Personal information
                            <br/><br/>(a) Key Official
                            <br/><br/>(b) Money Laundering Reporting Officer
                            <br/><br/>(c) Director of Operations
                            <br/><br/>(d) customer support agents
                            <br/><br/>(e) customer retention team members
                            <br/><br/>(f) VIP player manager(s)
                            <br/><br/>We may disclose your information to service providers and other third-parties under contract who help us with providing you and others our Services on our behalf or other services provided by third-parties via our Services or Website. They are required to secure the data they receive
                            <br/><br/>You agree that your personal data will only be disclosed to and/or processed by third parties in the following cases
                            <br/><br/>(a) to detect, investigate and control fraud, money laundering and terrorism funding activities (this includes but is not limited to third-party suppliers such as ID and address verification system providers, payment service providers and financial institutions, licensing bodies and other competent authorities)
                            <br/><br/>(b) to comply with our legal and regulatory duties and responsibilities to the relevant licensing and regulatory authorities as well as all duties and responsibilities owed under any other applicable legislation
                            <br/><br/>(c) if we need to share data with our payment processors to facilitate transactions
                            <br/><br/>(d) when we feel that disclosure is necessary to protect our or your safety, or the safety of others
                            <br/><br/>(e) if it concerns a credit reference agency (a credit reference agency may also keep a record of such information)
                            <br/><br/>(f) where we are required to do so by law
                            <br/><br/>(g) to any other third party with your prior consent to do so
                            <br/><br/>In order to provide you with efficient services, we and our service providers may be required to transfer your personal data from one country to another. Some of the data processors engaged to process your personal information may not be based on European Economic Area (EEA) and data protection laws applicable to them may not be as protective as EU law. By agreeing to this Privacy Policy, you acknowledge and agree to our (and our service providers) processing of your personal information outside the EEA. We will take all reasonable efforts to ensure that your personal data is treated securely and is processed with appropriate care and protection
                            <br/><br/>How You Can Access, Control and Correct Your Personal Informatio
                            <br/><br/>You have the right to access your personal data that have been collected and held by us. We will provide this, free of charge in electronic format, subject to you evidencing your ID to avoid a security breach. You also have the right to request a correction and/or erasure of incorrect and/or inappropriate data. Your request should be sent to our Customer Support at support@kasino9.com. It is your responsibility to maintain your personal information accurate and up to date
                            <br/><br/>You also have the right to ask us not to process your personal data for marketing purposes. This will not affect your ability to play on the Website, however, will limit the bonus and special offer notifications you receive
                            <br/><br/>Where you have given consent to process your personal information, you have the right to withdraw this at any time. However, once you make that request, we will no longer be able to provide or continue to provide you with our Services and your player account will be closed. Your personal information is essential to us not only for the purpose of providing our Services but also to comply with fraud and anti-money laundering regulations
                            <br/><br/>You may also request the removal of your personal data from our systems, whereby we will isolate your data in a secure, separate system which will be kept only for legal and anti-money laundering purposes for the necessary amount of time. All non-essential data will be deleted and upon the lapse of the required period of time, all data held will be deleted
                            <br/><br/>We will respond to any request to provide, correct, restrict or erase data within 4 weeks of receiving written requests to the support email support@kasino9.com
                            <br/><br/>How We Use Cookies & Similar Tool
                            <br/><br/>We may use cookies and similar technologies on our Websites and Services. Cookies are small files containing information that is downloaded to your device when you visit our Website. We use them in order to offer you an optimal and personalised customer experience, track visitors and improve our Services. You may refuse to accept cookies by activating an appropriate setting on your Internet browser. However, if you select this setting you may be unable to access certain parts of our Website. Unless you have adjusted your browser settings so that it will refuse cookies, our system will issue cookies when you log on to the Website. If you register on the Website, or if you continue using the Website, you agree to our use of cookies and similar technologies on the Website
                            <br/><br/>Other Important Privacy Informatio
                            <br/><br/>Our Website may contain links to and from the third-party websites. If you follow a link to any of these websites, please note that these websites have their own privacy policies and that we do not accept any responsibility or liability for these policies or the content of the websites. Before you submit any personal data to these websites, please carefully check their privacy policies
                            <br/><br/>We reserve the right to make changes to this Privacy Policy at any time. Any changes will be posted on this page and will become effective immediately. If we make any substantial changes to this Privacy Policy, we will notify you either by e-mail, notice on the Website or other agreed communications channels
                            <br/><br/>All capitalised terms used in this Privacy Policy shall have the same meaning as set forth in the Terms and Conditions of the Website unless otherwise stated
                            <br/><br/>We adhere to the EU Data Protection Directive (EC Directive 95/46/EC) and the EU Electronic Communications Privacy Directive (EC Directive/2002/58/EC as amended by Directive 2009/136/EC)
                            <br/>If you still have questions about our Privacy Policy, please feel free to send us an email to support@kasino.com
                        </p>
                    </Col>
                </Row>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    
})

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(About)
