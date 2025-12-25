import POPHeader from "@/components/POPHeader";
import Apresentacao from "@/components/Apresentacao";
import PassoAPasso from "@/components/PassoAPasso";
import DocumentosObrigatorios from "@/components/DocumentosObrigatorios";
import POPFooter from "@/components/POPFooter";
import FloatingNav from "@/components/FloatingNav";

const Index = () => {
  return (
    <div className="min-h-screen bg-background pb-16">
      <FloatingNav />
      <POPHeader />
      <main className="lg:pl-16">
        <Apresentacao />
        <PassoAPasso />
        <DocumentosObrigatorios />
      </main>
      <POPFooter />
    </div>
  );
};

export default Index;
