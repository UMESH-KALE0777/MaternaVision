import { useState } from 'react';
import { Download } from 'lucide-react';
import { generateReport } from '../api/client';

export default function DownloadReport({ caseId, reportUrl }) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleDownload = async () => {
    setError('');
    setLoading(true);

    try {
      if (reportUrl) {
        window.open(reportUrl, '_blank', 'noopener,noreferrer');
        return;
      }

      if (!caseId) {
        throw new Error('No case ID is available for this report.');
      }

      const response = await generateReport(caseId);

      if (response?.url) {
        window.open(response.url, '_blank', 'noopener,noreferrer');
      } else if (response?.download_url) {
        window.open(response.download_url, '_blank', 'noopener,noreferrer');
      } else if (response?.report_url) {
        window.open(response.report_url, '_blank', 'noopener,noreferrer');
      } else {
        throw new Error('The backend did not return a report URL.');
      }
    } catch (err) {
      setError(err.message || 'Unable to generate the clinical report.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <button
        type="button"
        onClick={handleDownload}
        disabled={loading}
        className="w-full clinical-button flex items-center justify-center gap-2 disabled:opacity-60 disabled:cursor-not-allowed"
      >
        <Download size={18} />
        {loading ? 'Generating Report...' : 'Download Clinical Report'}
      </button>

      {error && (
        <p className="mt-2 text-sm text-red-600">
          {error}
        </p>
      )}
    </div>
  );
}
