import { Repository } from "typeorm";

import { Language } from "../entities/language.entity";
import { appDataSource } from "../bootstrap";
import { CreateLanguage } from "../dto/createLanguage";

const langRepository: Repository<Language> =
  appDataSource.getRepository("Word");

const addLang = (model: CreateLanguage): Promise<Language> => {
  const newLang = langRepository.create(model);
  return langRepository.save(newLang);
};

export { addLang };
export default langRepository;
