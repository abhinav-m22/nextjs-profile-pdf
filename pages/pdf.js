import { PDFViewer } from '@react-pdf/renderer/lib/react-pdf.browser.cjs.js';
import { PDFContent } from '@/src/components/PDFContent';

export default function Home() {
    return (
        <PDFViewer width="100%" height="600px">
            <PDFContent />
        </PDFViewer>
    );
}
