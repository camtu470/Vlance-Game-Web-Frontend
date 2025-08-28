import Connect from "../../../components/home/connect";
import Introduce from "../../../components/home/introduce";
import Season from "../../../components/home/season";
import Service from "../../../components/home/service";
import Team from "../../../components/home/team";
import NameArea from "../../../components/layout/name";

export default function AboutPage() {
  return (
    <div className="flex flex-col gap-16">
      <NameArea title="ABOUT US" />
      <Introduce />
      <Service />
      <Team />
      <Season />
      <Connect />
    </div>
  );
}
