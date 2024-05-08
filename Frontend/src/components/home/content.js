import React from "react";
import "./content.css"
import { Typography, Container, Grid } from "@mui/material";
const Content = () => {
    return (
        <>
        <Container className="container-with-margin" maxWidth="lg">
            <Grid container spacing={3}>
                <Grid item xs={12} md={6}>
                    <Typography variant="h3" align="left" className="heading-part animated-text slide-in">
                       
                        What is Cyber Security Awarness
                    </Typography>
                </Grid>
                <Grid item xs={12} md={6}>
                    {/* Right Content */}
                    <Typography variant="body1" align="right" className="animated-text fade-in">
                        Cybersecurity awareness includes being aware of the latest security threats, 
                        cybersecurity best practices, the dangers of clicking on a malicious link or downloading an infected attachment, 
                        interacting online, disclosing sensitive information and so on. Security awareness training programs help to enhance your organization's 
                        security posture and tighten its processes, thereby paving the way to building a more resilient business. Cybersecurity awareness must be an organization-wide initiative for it to be most effective and beneficial.
                    </Typography>
                </Grid>
            </Grid>
        
        </Container>
        <Container  className="container-with-margin" maxWidth="lg">
            <Grid container spacing={3}>
                <Grid item xs={12} md={6}>
                    {/* Right Content */}
                    <Typography variant="body1" align="left" className="animated-text fade-in">
                        Cybersecurity awareness is crucial to understand digital threats and protect against them. 
                        It empowers individuals and organizations to recognize phishing scams, secure sensitive information, 
                        and prevent cyber attacks. With the rapid digitization of our lives, awareness ensures safer online practices, 
                        mitigates risks of data breaches, and preserves privacy. By fostering a culture of vigilance and knowledge, 
                        cybersecurity awareness strengthens resilience against evolving cyber threats, safeguarding both personal and organizational assets in the digital landscape.
                    </Typography>
                </Grid>
                <Grid item xs={12} md={6} className="heading-grid">
                    <Typography variant="h3" align="left" className="heading-part animated-text slide-in">
                        Why Cybersecurity Awareness Required?
                    </Typography>
                </Grid>
            </Grid>
        </Container>
        <Container  className="container-with-margin" maxWidth="lg">
            <Grid container spacing={3}>
                <Grid item xs={12} md={6} className="heading-grid">
                    <Typography variant="h3" align="left" className="heading-part animated-text slide-in">
                        How to achieve Cybersecurity Awarness !!
                    </Typography>
                </Grid>
                <Grid item xs={12} md={6}>
                    {/* Right Content */}
                    <Typography variant="body1" align="left" className="animated-text fade-in">
                    To enhance cyber security awareness, prioritize education on common threats like phishing, malware, and social engineering. 
                    Regularly update software and use strong, unique passwords. Employ multi-factor authentication where possible. 
                    Be cautious of suspicious emails, links, and downloads. Back up important data regularly and store it securely. 
                    Understand privacy settings on social media and limit personal information shared online. 
                    Keep devices protected with antivirus software and firewall. Stay informed about latest security trends and news. 
                    Encourage a culture of security awareness among peers and family. 
                    Lastly, report any suspicious activity promptly to relevant authorities or IT support.                
                    </Typography>
                </Grid>
            </Grid>
        </Container>
        
        </>
        
    )
}

export default Content;