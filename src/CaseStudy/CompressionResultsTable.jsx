import React, { useState } from 'react';
import styles from './CaseStudy.module.css';

const CompressionResultsTable = () => {
  const [showAll, setShowAll] = useState(false);
  const rowsToShow = 5; // Number of rows to show initially
  const data = [
    { algorithm: "Brotli", origSize: 18584, compSize: 11056, time: 0.0534, percentage: "41%", ratio: "59%", sentences: 100, structure: "5/10/10" },
    { algorithm: "LZMA", origSize: 18584, compSize: 23260, time: 0.8064, percentage: "-25%", ratio: "125%", sentences: 100, structure: "5/10/10" },
    { algorithm: "Zlib", origSize: 18584, compSize: 16040, time: 0.0002, percentage: "14%", ratio: "86%", sentences: 100, structure: "5/10/10" },
    { algorithm: "Brotli", origSize: 92020, compSize: 54296, time: 0.2441, percentage: "41%", ratio: "59%", sentences: 500, structure: "5/50/10" },
    { algorithm: "LZMA", origSize: 92020, compSize: 115228, time: 4.1829, percentage: "-25%", ratio: "125%", sentences: 500, structure: "5/50/10" },
    { algorithm: "Zlib", origSize: 92020, compSize: 79608, time: 0.0203, percentage: "13%", ratio: "87%", sentences: 500, structure: "5/50/10" },
    { algorithm: "Brotli", origSize: 184641, compSize: 108392, time: 0.5067, percentage: "41%", ratio: "59%", sentences: 1000, structure: "5/50/100" },
    { algorithm: "LZMA", origSize: 184641, compSize: 231020, time: 8.3502, percentage: "-25%", ratio: "125%", sentences: 1000, structure: "5/50/100" },
    { algorithm: "Zlib", origSize: 184641, compSize: 159512, time: 0.0592, percentage: "14%", ratio: "86%", sentences: 1000, structure: "5/50/100" },
    { algorithm: "Brotli", origSize: 923099, compSize: 427812, time: 1.1624, percentage: "54%", ratio: "46%", sentences: 5000, structure: "5/50/1000" },
    { algorithm: "LZMA", origSize: 923099, compSize: 673652, time: 4.3563, percentage: "27%", ratio: "73%", sentences: 5000, structure: "5/50/1000" },
    { algorithm: "Zlib", origSize: 923099, compSize: 630592, time: 0.0638, percentage: "32%", ratio: "68%", sentences: 5000, structure: "5/50/1000" },
    { algorithm: "Brotli", origSize: 1850856, compSize: 858384, time: 2.4743, percentage: "54%", ratio: "46%", sentences: 10000, structure: "5/100/10" },
    { algorithm: "LZMA", origSize: 1850856, compSize: 1351432, time: 8.7541, percentage: "27%", ratio: "73%", sentences: 10000, structure: "5/100/10" },
    { algorithm: "Zlib", origSize: 1850856, compSize: 1265772, time: 0.1257, percentage: "32%", ratio: "68%", sentences: 10000, structure: "5/100/10" },
    { algorithm: "Brotli", origSize: 9255547, compSize: 4102024, time: 11.2673, percentage: "56%", ratio: "44%", sentences: 50000, structure: "5/100/100" },
    { algorithm: "LZMA", origSize: 9255547, compSize: 4563880, time: 6.4345, percentage: "51%", ratio: "49%", sentences: 50000, structure: "5/100/100" },
    { algorithm: "Zlib", origSize: 9255547, compSize: 4877812, time: 0.6763, percentage: "47%", ratio: "53%", sentences: 50000, structure: "5/100/100" },
    { algorithm: "Brotli", origSize: 46245158, compSize: 20050652, time: 58.2358, percentage: "57%", ratio: "43%", sentences: 250000, structure: "5/100/2500" },
    { algorithm: "LZMA", origSize: 46245158, compSize: 20953700, time: 20.1157, percentage: "55%", ratio: "45%", sentences: 250000, structure: "5/100/2500" },
    { algorithm: "Zlib", origSize: 46245158, compSize: 22778584, time: 4.4996, percentage: "51%", ratio: "49%", sentences: 250000, structure: "5/100/2500" },
  ];

  return (
    <div className={styles.tableContainer}>
      <h2>Compression Results Comparison</h2>
      <table className={styles.compressionTable}>
        <thead>
          <tr>
            <th>Algorithm</th>
            <th>Original Size (bytes)</th>
            <th>Compressed Size (bytes)</th>
            <th>Compression Time (s)</th>
            <th>Compression %</th>
            <th>Compression Ratio</th>
            <th>Sentences/Page</th>
            <th>Pages/Emails/Sentences</th>
          </tr>
        </thead>
        <tbody>
          {data.slice(0, showAll ? data.length : rowsToShow).map((row, index) => (
            <tr key={index}>
              <td>{row.algorithm}</td>
              <td>{row.origSize.toLocaleString()}</td>
              <td>{row.compSize.toLocaleString()}</td>
              <td>{row.time.toFixed(4)}</td>
              <td>{row.percentage}</td>
              <td>{row.ratio}</td>
              <td>{row.sentences}</td>
              <td>{row.structure}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Expand/Collapse Button */}
      <button className={styles.toggleButton} onClick={() => setShowAll(!showAll)}>
        {showAll ? 'Show Less ▲' : 'Show More ▼'}
      </button>
    </div>
  );
};

export default CompressionResultsTable;
