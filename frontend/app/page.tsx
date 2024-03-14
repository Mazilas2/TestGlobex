import SearchBar from "@/components/SearchBar";
import Card from "@/components/Card";

const staticValues = {
  name: "Евгения Савченко",
  phone: "+7 (918) 078-17-05",
  email: "yysavchenk@mail.ru",
  date: "15.10.2020",
  position: "Дизайнер",
  department: "Трайб автоматизированных систем контактных центров",
};

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center gap-8 px-20 pt-16 font-proxima-nova">
      <SearchBar />
      <div className="grid grid-cols-3 gap-6 w-full h-full">
        <Card {...staticValues} />
        <Card {...staticValues} />
        <Card {...staticValues} />
        <Card {...staticValues} />
        <Card {...staticValues} />
        <Card {...staticValues} />
      </div>
    </main>
  );
}
