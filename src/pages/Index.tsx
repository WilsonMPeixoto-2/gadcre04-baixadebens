import POPHeader from "@/components/POPHeader";
import Apresentacao from "@/components/Apresentacao";
import PassoAPasso from "@/components/PassoAPasso";
import DocumentosObrigatorios from "@/components/DocumentosObrigatorios";
import POPFooter from "@/components/POPFooter";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <POPHeader />
      <main>
        <Apresentacao />
        <PassoAPasso />
        <DocumentosObrigatorios />
      </main>
      <POPFooter />
    </div>
  );
};

export default Index;
