import {Player} from "./Player";
import {Agent} from "./Agent";

const sm: Agent = new Agent("SM Entertainment");
const irene: Player = new Player("Juhyeon Bea");

irene.introduce();

irene.managedBy(sm);
irene.join("RedVelvet", 84);

irene.introduce();

irene.extendContract(24);

irene.introduce();
