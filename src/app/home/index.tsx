import Adv from "../../components/home/adv";

import Introduce from "../../components/home/introduce";
import MatchList from "../../components/home/match-list";

import Service from "../../components/home/service";
import Team from "../../components/home/team";
import TopRate from "../../components/home/top-rate";
import TopTrending from "../../components/home/top-trending";

export default function HomePage() {
  return (
    <div className="flex flex-col gap-10 lg:gap-20">
      <Adv />
      <TopTrending />
      <TopRate />
      <MatchList />
      <Introduce />
      <Service /> <Team />
    </div>
  );
}
