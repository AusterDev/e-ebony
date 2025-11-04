# e-Ebony
Community maintained mock test platform

JSON schema for questions
```json
{
  "$schema": "http://json-schema.org/draft-07/schema#",
  "title": "QuestionsSchema",
  "type": "array",
  "description": "Array of questions, each with unique question number.",
  "items": {
    "type": "object",
    "properties": {
      "number": {
        "type": "number",
        "description": "Unique question number."
      },
      "content": {
        "type": "string",
        "description": "Sanitized content of the question."
      },
      "marks": {
        "type": "number",
        "minimum": 1,
        "description": "Marks awarded for the question."
      },
      "negativeMarks": {
        "type": "number",
        "maximum": 0,
        "description": "Negative marks for the question."
      },
      "correctOptionNumber": {
        "type": "number",
        "description": "The number of the correct option."
      },
      "options": {
        "type": "array",
        "description": "Array of option objects with unique option numbers.",
        "items": {
          "type": "object",
          "properties": {
            "number": {
              "type": "number",
              "description": "Unique option number within the question."
            },
            "content": {
              "type": "string",
              "description": "Content of the option."
            },
            "questionNumber": {
              "type": "number",
              "description": "The question number this option belongs to."
            }
          },
          "required": ["number", "content", "questionNumber"],
          "additionalProperties": false
        }
      }
    },
    "required": [
      "number",
      "content",
      "marks",
      "negativeMarks",
      "correctOptionNumber",
      "options"
    ],
    "additionalProperties": false
  }
}
```