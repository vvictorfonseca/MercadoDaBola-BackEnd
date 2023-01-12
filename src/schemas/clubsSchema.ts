import Joi from "joi";
import { CreateClubData } from "../services/clubsService";

const clubSchema = Joi.object<CreateClubData>({
  name: Joi.string().min(4).required(),
  photo: Joi.string().required()
})

export default clubSchema