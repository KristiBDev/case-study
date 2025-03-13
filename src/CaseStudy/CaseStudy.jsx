import React from 'react';
import styles from './CaseStudy.module.css';
import CompressionResultsTable from './CompressionResultsTable';

const CaseStudy = () => {
  return (
    <>
      {/* Small floating navigation menu */}
      <div className={styles.navContainer}>
        <h4>Navigation</h4>
        <ul>
          <li><a href="#researchMotivation">Research Motivation</a></li>
          <li><a href="#aimsObjectives">Aims & Objectives</a></li>
          <li><a href="#systemArchitecture">System Architecture</a></li>
          <li><a href="#designImplementation">Design & Implementation</a></li>
          <li><a href="#resultsAnalysis">Results & Analysis</a></li>
          <li><a href="#conclusions">Conclusions</a></li>
          <li><a href="#challengesLimitations">Challenges & Limitations</a></li>
          <li><a href="#futureDirections">Future Directions</a></li>
         
        </ul>
      </div>

      <div className={styles.caseStudyContainer}>
        <article className={styles.caseStudyArticle}>
          <header className={styles.header}>
            <h1>Email Archival System Case Study</h1>
          </header>

          {/* RESEARCH MOTIVATION */}
          <section className={styles.section} id="researchMotivation">
            <h2>Research Motivation</h2>
            <ul>
              <li>
                Develop a local email archival system that ensures long-term
                preservation and offline access.
              </li>
              <li>
                Enhance data preservation and user privacy by eliminating
                reliance on cloud services and complex software solutions that
                require constant maintenance.
              </li>
            </ul>
          </section>

          {/* AIMS AND OBJECTIVES */}
          <section className={styles.section} id="aimsObjectives">
            <h2>Aims and Objectives</h2>
            <div className={styles.primaryAim}>
              <h3>Primary Aim</h3>
              <p>
                Create a local email archiving system that increases the
                efficiency and dependability of long-term digital preservation.
              </p>
            </div>

            <div className={styles.objectives}>
              <h3>Objectives</h3>
              <ol>
                <li>
                  Creating a foundational platform for gathering and formatting
                  email data into HTML pages, to ensure long-term preservation.
                </li>
                <li>
                  Identifying and implementing the most effective compression
                  method for the project after analyzing several techniques.
                </li>
                <li>
                  Building and implementing a user-friendly system that requires
                  no training and is easy to use even in cases where it is not
                  used for extended periods of time.
                </li>
                <li>
                  Developing a local system based on the feedback received from
                  both users and data analysis that balances effective storage,
                  easy access, and long-term data preservation.
                </li>
                <li>
                  Writing the research report and preparing a presentation based
                  on findings.
                </li>
              </ol>
            </div>
          </section>

          {/* SYSTEM ARCHITECTURE */}
          <section className={styles.section} id="systemArchitecture">
            <h2>System Architecture</h2>
            <div className={styles.imageContainer}>
              {/* Placeholder for system architecture diagram */}
              <img
                src="/sysdesign.png"
                alt="System Architecture Diagram"
                className={styles.architectureImage}
              />
              
            </div>
            <p></p>
          </section>

          {/* DESIGN AND IMPLEMENTATION (SECTION 5 CONTENT) */}
          <section className={styles.section} id="designImplementation">
            <h2>Design & Implementation</h2>

            <h3>Introduction to the Implementation Phase</h3>
            <p>
              Building a local email archival system that operates entirely
              offline demands a careful blend of efficient data acquisition,
              intelligent data formatting, and user-friendly retrieval. This
              section chronicles the process step-by-step: emphasizing Python’s
              role in data collection, HTML for dependable data storage, and
              JavaScript-driven methods for front-end retrieval. We also explore
              how compression algorithms like <strong>zlib</strong>,{' '}
              <strong>Brotli</strong>, and <strong>LZMA</strong> were tested and
              ultimately integrated based on both performance metrics and user
              feedback.
            </p>

            <h3>Python Environment for Email Collection</h3>
            <p>
              The initial step involved creating a secure connection to Gmail
              using Python’s <strong>imaplib</strong> and <strong>email</strong>{' '}
              libraries. To protect user credentials, the project relied on an
              app-specific password aligned with Google’s two-factor
              authentication protocol. Once authenticated, a custom{' '}
              <code>download_emails</code> function fetched messages from the
              inbox, storing the subject, sender, date, and body in a structured
              dictionary. This dictionary-based approach ensured consistent
              formatting, making downstream processing-for instance, HTML
              conversion-both simpler and more reliable.
            </p>
            
            <p>
              Additionally, in cases where large-scale or repetitive testing was
              necessary, the <strong>Faker</strong> library stepped in to
              generate thousands of synthetic emails. By defining key parameters
              such as the number of messages per page, the average length of
              each email, and artificial sender details, we could stress-test
              the entire pipeline without cluttering real inboxes.
            </p>

            <h3>Conversion to HTML Static Pages</h3>
        
            <p>
            After retrieving messages, the next priority was storing them in a format that would stand the test of time. HTML was chosen because it remains the most universally compatible format for displaying rich text, ensuring longevity without reliance on proprietary formats or external dependencies. By keeping everything within standard HTML, CSS, and vanilla JavaScript, the system avoids compatibility issues that might arise with evolving frameworks or libraries.

            Each message was transformed into a compact segment with its own preview area. No external UI libraries or complex styling frameworks were used—just minimal, functional design to ensure the emails remain accessible across any browser or device, even decades from now. A small script inserted pagination controls, allowing users to navigate pages of emails seamlessly without being overwhelmed by a single massive file.
            
           
            </p>
            <p>
            The conversion pipeline involved extracting key fields like subject and body from each parsed email dictionary and embedding them into static HTML. JavaScript was injected sparingly, only to power necessary interactions such as expanding and collapsing messages. 
            </p>

            <h3>Testing and Comparing Compression Algorithms</h3>
            <div style={{ display: "flex", justifyContent: "center", gap: "20px" }}>
                <img 
                  src="compression_time.png" 
                  alt="Image 1" 
                  style={{ width: "50%",
                    border: "2px solid #ddd", 
                    borderRadius: "8px",
                    boxShadow: "4px 4px 10px rgba(0, 0, 0, 0.2)"}}
                />
       
                <img 
                  src="compression_numsentence_zlib.png" 
                  alt="Image 2" 
                  style={{ width: "50%",
                    border: "2px solid #ddd", 
                    borderRadius: "8px",
                    boxShadow: "4px 4px 10px rgba(0, 0, 0, 0.2)"}}
                />
              </div>
           

           
            <p>
              Before finalizing a compression strategy, I ran extensive tests on
              <strong> zlib</strong>, <strong>Brotli</strong>, and{' '}
              <strong>LZMA</strong>. This testing phase was partially guided by
              recommendations from library documentation, but it was also
              deeply informed by empirical performance data. The methodology
              involved:
            </p>
            <ul>
              <li>
                <strong>Multiple Test Datasets:</strong> including short emails,
                extremely long email threads, and randomized texts from Faker.
              </li>
              <li>
                <strong>Compression &amp; Decompression Timing:</strong>{' '}
                Automated Python scripts recorded how long each algorithm took
                to compress and later decompress HTML files representing emails.
              </li>
              <li>
                <strong>Compression Ratio:</strong> We examined not just raw
                speed but also how much space each algorithm saved - crucial for
                long-term archival.
              </li>
            </ul>
            
            

            <p>
              Results revealed that <strong>Brotli</strong> and <strong>LZMA</strong> 
              generally achieved higher ratios but frequently at the cost of 
              slower speeds. <strong>zlib</strong>, meanwhile, balanced 
              respectable compression levels with notably quicker times - an important 
              factor for real-world usage where archiving large email sets in 
              one go is common.
            </p>

            <h3>Optimization of zlib Compression Based on Feedback</h3>
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", width: "100%" }}>
              {/* Left Side - Text */}
              <div style={{ width: "50%", padding: "10px" }}>
              <p>
              Through user surveys, it became clear that speed was essential. Many 
              potential adopters wanted a guarantee that archiving wouldn’t slow 
              their workflow. After reviewing test outcomes,{' '}
              <strong>zlib</strong> was the prime candidate. However, to bolster 
              its compression ratio further, I adopted a technique of bundling 
              entire email sets from one HTML page into a single block. This 
              avoids repetitive overhead and leverages zlib’s strengths on bigger 
              chunks of text. In some tests, it delivered near-50% compression 
              while retaining short processing times.
              </p>  
              </div>

              {/* Right Side - Image */}
              <div style={{ width: "50%", textAlign: "right" }}>
                <img src="user_survey.png" alt="User Survey" 
                  style={{ width: "90%",
                  border: "2px solid #ddd", 
                  borderRadius: "8px",
                  boxShadow: "4px 4px 10px rgba(0, 0, 0, 0.2)"
                 }} />
              </div>
            </div>

        

            <h3>JavaScript Decompression and Dynamic Email Loading</h3>
            <p>
              A local system still needs intuitive front-end interaction. To keep 
              initial page loads minimal, each HTML file includes just the shell 
              of the email listings plus one large compressed data block (stored 
              in base64). A small JavaScript snippet (using the <em>pako</em> 
              library) then decompresses that block on demand. Whenever a user 
              expands an email, the compressed text is decoded and inserted into 
              the page. This blend of on-demand loading and offline-first design 
              ensures quick navigation even when dealing with massive archives.
            </p>

            <h3>Additional Features and Proofs of Concept</h3>
            <p>
              Although the compression algorithm and HTML conversion while maintaining a very simple UI was the primary goal,
              two extra proof of concept features were added for future consideration: </p>
           
            
            <ul>
              <li>
                <strong>Search Functionality:</strong> The creation of a 
                <code>search_index.js</code> file lets users type in keywords 
                and immediately see relevant email subjects, bridging the gap 
                between an offline archive and rapid lookups.
              </li>
              <li>
                <strong>Basic Login System:</strong> A simple username/password 
                prompt can limit unauthorized access to archived emails. In a 
                production setting, this mechanism could be expanded with 
                token-based authentication or even multi-factor support.
              </li>
            </ul>
            
            <h3>Summary of the Building Process</h3>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", width: "100%" }}>
            <img 
            src="uidesign.png" 
            alt="UI Design" 
            style={{ width: "50%",
              border: "2px solid #ddd", 
              borderRadius: "8px",
              boxShadow: "4px 4px 10px rgba(0, 0, 0, 0.2)",
              margin: "10px"}}
          />
            <div >
            <p>
            This project was all about finding the right balance between a strong back-end and a simple, flexible front-end. Python handled the heavy lifting—collecting, parsing, and compressing emails; while JavaScript made it easy to decompress and navigate the data. The result is  system that works completely offline, keeps emails accessible for the long haul, and stays user-friendly.
            </p>
            <p>Throughout the process, user feedback and testing played a huge role. The UI elements were kept as simple as possible to ensure the system will remain easy to use. Insights from real users and performance tests helped shape key decisions, making sure the system remained both efficient and easy to use.    </p>
            </div>
            </div>
          </section>
          

          {/* RESULTS & ANALYSIS */}
          <section className={styles.section} id="resultsAnalysis">
            <h2>Results and Analysis</h2>
            <div className={styles.results}>
           
              <h3>Compression Performance</h3>
              <ul>
                <li>
                  <strong>Zlib:</strong> Best at level 9: 1.50 ratio, reducing
                  9,245,793 bytes to 4,872,452 bytes in 1.19 seconds.
                </li>
                <li>
                  <strong>Brotli:</strong> Best at quality 11: 2.26 ratio,
                  reducing to 4,096,800 bytes in 11.97 seconds.
                </li>
                <li>
                  <strong>LZMA:</strong> Best at preset 9: 2.03 ratio, reducing
                  to 4,559,688 bytes in 6.83 seconds.
                </li>
              </ul>
              <CompressionResultsTable />
            </div>

            <div className={styles.analysis}>
              <h3>Comparative Analysis</h3>
              <p>
                The system achieved a compression ratio of 50%, matching similar
                studies on lossless compression. The implementation
                successfully balanced performance with user accessibility,
                demonstrating that an offline approach-supported by modern
                compression algorithms-can maintain both efficiency and ease of
                use.
              </p>
            </div>
          </section>

          {/* CONCLUSIONS */}
          <section className={styles.section} id="conclusions">
            <h2>Conclusions</h2>
            <div className={styles.conclusions}>
              <h3>System Success</h3>
              <p>
                The local email archival system met its goals by providing an
                efficient, user-friendly solution for long-term email
                preservation, addressing issues related to cost, privacy, and
                long-term preservation.
              </p>

              <h3>Future Work</h3>
              <p>
                Potential improvements include adding support for multimedia
                content, advanced search strategies, and integrating adaptive
                technologies to further improve user experience.
              </p>
            </div>
          </section>

          {/* CHALLENGES & LIMITATIONS */}
          <section className={styles.section} id="challengesLimitations">
            <h2>Challenges and Limitations</h2>
            <p>
              In the development of the email archival system, several
              challenges and limitations emerged that could influence the
              outcomes and applicability of the research. One significant
              limitation was the focus solely on text-based compression. While
              this approach aligns with the common content type found in emails,
              it does not account for emails that include multimedia elements
              such as images or videos.
            </p>
            <p>
              The user feedback phase, though valuable, was limited in scope
              and conducted in controlled conditions. These factors may not
              fully capture the complexity of real-world usage, where diverse
              user needs and broader data types come into play. Balancing
              compression efficiency with fast access also remains a challenge,
              particularly for users who require both rapid archiving and
              minimal storage footprints.
            </p>
          </section>

          {/* FUTURE DIRECTIONS */}
          <section className={styles.section} id="futureDirections">
            <h2>Future Directions</h2>
            <p>
              The findings from this research open several avenues for further
              development. One immediate step is extending compression
              capabilities to include multimedia content. Another is
              implementing more advanced user interfaces or machine learning
              approaches that adapt to individual preferences for compression
              ratio and speed. Integrating cloud storage while retaining offline
              capability might also benefit users who need access from multiple
              devices.
            </p>
            <p>
              Enhanced search features and a fully developed login system could
              be introduced, with improved security measures and more intuitive
              indexing strategies. A guided setup process to accommodate
              non-technical users would further expand the system’s usability.
              These future directions aim to refine and scale the existing
              solution, making it more robust for individuals and potentially
              small organizations with evolving data preservation requirements.
            </p>
          </section>

          
        </article>
        
      </div>
    </>
  );
};

export default CaseStudy;
