import Joi from "joi";
import { CreateTransferData } from "../services/transfersService";
import { transfers } from "@prisma/client";

const transferSchema = Joi.object<transfers>({
  id: Joi.number(),
  playerId: Joi.number().required(),
  from: Joi.number().required(),
  to: Joi.number().required(),
  status: Joi.string().valid("Melou", "Negociando", "Fechado")
})

export default transferSchema