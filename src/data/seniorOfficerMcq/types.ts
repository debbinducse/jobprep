import { TopicCategory, DifficultyLevel } from '../../types/exam';

export interface McqQuestionDef {
  topicCategory: TopicCategory;
  questionText: string;
  options: [string, string, string, string]; // exactly 4 options
  correctOption: 0 | 1 | 2 | 3;
  solution: string;
  tags: string[];
  difficulty: DifficultyLevel;
}
