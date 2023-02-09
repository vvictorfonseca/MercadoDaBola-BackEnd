import Joi from "joi";
import { CreatePlayerData } from "../services/playersService";

const playerSchema = Joi.object<CreatePlayerData>({
  name: Joi.string().min(4).required(),
  age: Joi.number().required(),
  nationality: Joi.string().min(4).required(),
  position: Joi.string().valid("Goleiro", "Zagueiro", "Volante", "Lateral", "Meia", "Atacante").required(),
  photo: Joi.string().required()
})

export default playerSchema