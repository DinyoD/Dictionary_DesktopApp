import { Repository } from "typeorm";

import { Word } from "../entities/word.entity";
import { appDataSource } from "../bootstrap";
import { CreateWordModel } from "../dto/createWord";

const wordRepository: Repository<Word> = appDataSource.getRepository("Word");

const addWord = (model: CreateWordModel): Promise<Word> => {
  const newWord = wordRepository.create(model);
  return wordRepository.save(newWord);
};

export { addWord };
export default wordRepository;
