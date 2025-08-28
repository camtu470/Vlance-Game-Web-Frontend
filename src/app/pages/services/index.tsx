import Season from "../../../components/home/season";
import Service from "../../../components/home/service";
import NameArea from "../../../components/layout/name";

export default function ServicesPage() {
  return (
    <div className="flex flex-col gap-10 pb-10">
      <NameArea title="Services" />
      <Service />
      <Season />
    </div>
  );
}
