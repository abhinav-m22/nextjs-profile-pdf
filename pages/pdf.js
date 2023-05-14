import { Inter } from 'next/font/google'
import { PDFViewer } from '@react-pdf/renderer';
import { PDFContent } from '@/src/components/PDFContent';

export default function Home() {
    return (
        <PDFViewer width="100%" height="600px">
            <PDFContent />
        </PDFViewer>
    );
}
