import React, { useEffect, useState } from "react";
import axios from 'axios';
import LinkIcon from '@mui/icons-material/Link';
import './contentPage.css'
import { Helmet } from "react-helmet-async";

const Content = () => {
  const [research, setResearch] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        await axios.get(`${process.env.REACT_APP_API_URL}/research`)
          .then((response) => {
            var data = response.data;
            setResearch(data);
          })
          .catch((err) => {
            setResearch([]);
          })
      }
      catch (err) {
        console.log(err);
      }
    }
    fetchData();
  }, []);
  return (
    <>
      <Helmet>
        <title>Content | Cyber Security Awarness</title>
        <meta
          name="description"
          content="We are a team of students who are enthusiastic developers. We are trying to create a platform for basic understanding of the Cyber Security"
        />
      </Helmet>
      <div className="contentContainer">
        <div className="content">
          <div className="content-top">
            <h1 > What is cybersecurity? </h1>
            <p>Cybersecurity is the practice of using technology, controls, and processes to protect digital networks,
              devices, and data from unauthorized access by malicious attackers or unintentional activity.
              It includes ensuring the confidentiality, integrity, and availability of information using many types of cybersecurity.
            </p>
            <h1>Ten types of cybersecurity</h1>
            <p>Many types of cybersecurity are employed to protect digital systems from malicious and accidental threats. It is helpful to understand the ten most commonly referenced types of cybersecurity.</p>
            <h3>1. Application security </h3>
            <p>Application security prevents unauthorized access and use of applications and connected data. Because most vulnerabilities are introduced during the development and publishing stages, application security includes many types of cybersecurity solutions to help identify flaws during the design and development phases that could be exploited and alert teams so they can be fixed.</p>
            <p>Despite best efforts, flaws do slip through the cracks. Application security also helps protect against these vulnerabilities.
              A subset of application security is web application security. It focuses on protecting web applications, which are frequently targeted by cyber attacks.
            </p>
            <h3>2. Cloud security </h3>
            <p>
              Cloud security focuses on protecting cloud-based assets and services, including applications, data, and infrastructure. Most cloud security is managed as a shared responsibility between organizations and cloud service providers.
            </p>
            <p>
              In this shared responsibility model, cloud service providers handle security for the cloud environment, and organizations secure what is in the cloud. Generally, the responsibilities are divided as shown below.
            </p>
            <h3>3. Critical infrastructure security </h3>
            <p>
              Special security processes and types of cybersecurity solutions are used to protect the networks, applications, systems, and digital assets depended on by critical infrastructure organizations (e.g., communications,
              dams, energy, public sector, and transportation). Critical infrastructure has been more vulnerable to cyber attacks that target legacy systems,
              such as SCADA (supervisory control and data acquisition) systems. While critical infrastructure organizations use many of the same types of cybersecurity as other subcategories, it is often deployed in different ways.
            </p>
            <h3>4. Data security </h3>
            <p>
              A subset of information security, data security combines many types of cybersecurity solutions to protect the confidentiality,
              integrity, and availability of digital assets at rest (i.e., while being stored) and in motion (i.e., while being transmitted).
            </p>
            <h3>5. Endpoint security </h3>
            <p>
              Desktops, laptops, mobile devices, servers, and other endpoints are the most common entry point for cyber attacks.
              Endpoint security protects these devices and the data they house. It also encompasses other types of cybersecurity that are used to protect networks from cyberattacks that use endpoints as the point of entry.
            </p>
            <h3>6. IoT (Internet of Things) security </h3>
            <p>
              IoT security seeks to minimize the vulnerabilities that these proliferating devices bring to organizations.
              It uses different types of cybersecurity to detect and classify them, segment them to limit network exposure,
              and seek to mitigate threats related to unpatched firmware and other related flaws.
            </p>
            <h3>7. Mobile security </h3>
            <p>Mobile security encompasses types of cybersecurity used to protect mobile devices (e.g., phones, tablets, and laptops)
              from unauthorized access and becoming an attack vector used to get into and move networks.
            </p>
            <h3>8. Network security </h3>
            <p>
              Network security includes software and hardware solutions that protect against incidents that result in unauthorized access or service disruption. This includes monitoring and responding to risks that impact network software (e.g., operating systems and protocols) and hardware (e.g., servers, clients, hubs, switches, bridges, peers, and connecting devices).
            </p>
            <p>
              The majority of cyber attacks start over a network. Network cybersecurity is designed to monitor, detect, and respond to network-focused threats.
            </p>
            <h3>9. Operational security </h3>
            <p>
              Operational security covers many types of cybersecurity processes and technology used to protect sensitive systems and data by establishing protocols for access and monitoring to detect unusual behavior that could be a sign of malicious activity.
            </p>
            <h3>10. Zero trust</h3>
            <p>
              The zero trust security model replaces the traditional perimeter-focused approach of building walls around an organization’s critical assets and systems. There are several defining characteristics of the zero trust approach, which leverages many types of cybersecurity.
            </p>

            <b>At its core, zero trust is based on several practices, including: </b>
            <ul>
              <li>Continuously verifying user's identity </li>
              <li>Establishing and enforcing the principle of least privilege for access, granting only the access that is explicitly required for a user to perform a job and only for as long as that access is required.</li>
              <li>Microsegmenting networks </li>
              <li>Trusting no users (i.e., internal or external)
                Many of the solutions within each of these types of cybersecurity are used across subcategories, such as: </li>
              <li>Anti-malware software </li>
              <li>Antivirus systems</li>
              <li>Backup </li>
              <li>Data loss prevention (DLP) </li>
              <li>Enterprise mobility management </li>
              <li>Encryption </li>
              <li>Endpoint detection and response (EDR)  </li>
              <li>Enterprise mobility management (EMM) </li>
              <li>Firewalls </li>
              <li>Identity and access management (IAM) </li>
              <li>Intrusion detection and prevention system (IDPS) </li>
              <li>Mobile application management (MAM)  </li>
              <li>Multi-factor authentication </li>
              <li>Network access control (NAC) </li>
              <li>Next-generation firewall (NGFW) </li>
              <li>Secure access service edge (SASE) </li>
              <li>Secure email gateways (SEG) </li>
              <li>Security information and event management (SIEM) </li>
              <li>Security orchestration, automation, and response (SOAR)</li>
              <li>User and entity behavior analytics (UEBA)  </li>
              <li>Virtual private networks (VPNs) </li>
              <li>Web application firewalls (WAFs)</li>
            </ul>

            <h1>How cybersecurity threats have evolved</h1>
            <p>
              Types of cybersecurity threats have changed significantly since 1965, when the first computer vulnerability exploit occurred. The following is a brief timeline of notable incidents.
            </p>
            <h3>1965: Software vulnerability </h3>
            <p>William D. Mathews from the Massachusetts Institute of Technology (MIT) found a flaw in a Multics Compatible Time-Sharing System (CTSS), the first general-purpose time-sharing operating system. The vulnerability could be used to disclose the contents of the password file. This is widely held to be the first reported vulnerability in a computer system.</p>
            <h3>1970: Virus</h3>
            <p>
              Bob Thomas created the first virus and unleashed the first cyber attack. Meant as a joke, the program moved between computers and displayed the message, “I'm the creeper, catch me if you can.”
            </p>
            <p>
              In response, his friend, Ray Tomlinson, wrote a program that moved from computer to computer and duplicated itself as it went. The message was changed to “I'm the reaper, catch me if you can.”
            </p>
            <p>
              While these were intended to be practical jokes, they started what would evolve into the advent of malicious cyberattacks.
            </p>
            <h3>1989: Worm</h3>
            <p>
              The Morris Worm, created by Robert Morris to determine the size of the internet, ended up being responsible for the first-ever denial-of-service (DoS) attack. With an initial infection, the worm slowed computers, but by infecting the same system multiple times, the worm was able to cause systems to crash.
            </p>
            <h3>1989: Trojan</h3>
            <p>
              The first ransomware attack was perpetrated at the 1989 World Health Organization's AIDS conference when Joseph Popp distrusted 20,000 inflected floppy discs. Once booted, the discs encrypted users files and demanded payment to unencrypt them.
            </p>
            <h3>1990s: Fast-spreading, malicious viruses </h3>
            <p>
              Particularly virulent viruses began to emerge in the 1990s, with the I LOVE YOU and Melissa viruses spreading around the world, infecting tens of millions of systems and causing them to crash. These viruses were distributed via email.
            </p>
            <h3>Early 2000s: Advanced persistent threats (APTs) </h3>
            <p>
              The early 2000s saw the rise of advanced persistent threats (APTs), with the Titan Rain campaign aimed at computer systems in the US and believed to have been initiated by China. Perhaps the most famous ATP is the Stuxnet worm that was used to attack Iran’s SCADA (supervisory control and data acquisition) systems in 2010, which were integral to their nuclear program.
            </p>
            <h3>Early 2000s: Ransomware-as-a-service </h3>
            <p>
              The first ransomware-as-a-service, Reveton, was made available on the dark web in 2012. This allowed those without specialized technical abilities to rent a ransomware system, including collecting payments.
            </p>
            <p>
              The 2013 emergency of the CryptoLocker ransomware marked a turning point for this malware. CryptoLocker not only used encryption to lock files, but was distributed using botnets.
            </p>
            <h3>
              2016: Botnets used to attack IoT devices
            </h3>
            <p>
              As the Internet of Things (IoT) exploded, this became a new attack vector. In 2016, the Mirai botnet was used to attack and infect more than 600,000 IoT devices worldwide.
            </p>
            <h3>2020: Supply chain attack </h3>
            <p>
              In 2020, a vulnerability in one enterprise organization’s network management system software was exploited by a group believed to be working with Russia. More than 18,000 customers were impacted when they deployed a malicious update that came from the compromised organization.
            </p>
            <h3>Present </h3>
            <p>
              Traditional cyber attack methods continue to be widely used because they remain effective. These are being joined by evolving versions that take advantage of machine learning (ML) and artificial intelligence (AI) to increase their reach and efficacy. Ironically, many of these attack methods take advantage of the technology that cybersecurity solutions use to thwart them.
            </p>
            <h2>Gen V attacks</h2>
            <p>
              Categorized as Mega attacks, Gen V is the latest generation of cyber threats. Gen V cyberattacks, which emerged in 2017, use large-scale, multi-vector approaches to target IT infrastructure with advanced attack technologies.
            </p>
            <p>
              These cyber threats are believed to originate with state organizations that leak the technology to public cybercriminals. The hallmark of Gen V cyberattacks is that they attack multiple vectors and are polymorphic, changing as they move around and acting differently on different systems. NotPetya and WannaCry are examples of Gen V cyberattacks
            </p>
            <h2>Supply chain attacks</h2>
            <p>
              Supply chain attacks have evolved with other attack vectors, since the same technologies and approaches are usually used. Supply chains have become a target for cybercriminals because these organizations provide an easier point of entry to specific enterprises than attacking those larger companies directly.
            </p>

            <h2>Ransomware</h2>
            <p>
              Ransomware has seen a fast and virulent evolution due to its efficacy and profitability. Attacks have escalated in terms of the scope of what is held hostage and the threats.
            </p>
            <p>
              Ransomware is used for extortion, with threats of disclosing information or destroying vital data if the ransom terms are not met. Ransomware-as-a-service has also made it much more accessible to cybercriminal elements.
            </p>
            <h2>
              Phishing
            </h2>
            <p>
              Phishing attacks persist as a preferred attack vector for cybercriminals, but new approaches are emerging to evade many types of cybersecurity, such as using QR codes to direct users to malware. There is also an increase in multi-stage attacks to bypass multi-factor authentication.
            </p>
            <h2>
              Malware
            </h2>
            <p>

              Malware continues to evolve by augmenting or changing legacy software using the latest technologies. Gen V cyber attacks leverage these newly updated malware packages.
            </p>


          </div>
        </div>
        <div className="research-main">
          < br />
          <h1>Reserch Papers</h1>
          <div className="research-papers">
            <ol>
              {research.map(rese => (
                <li>

                  <div key={rese.id} className="research">
                    <a target="_blank" href={rese.link}>{rese.topic} <LinkIcon /></a>
                  </div>
                </li>
              )
              )}

            </ol>
          </div>
        </div>
      </div>
    </>
  );
};
export default Content;
