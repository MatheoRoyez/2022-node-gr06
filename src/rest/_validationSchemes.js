// Add validation schemes in other file.
const Joi = require('joi');

const idValidation = {
  params: {
    id: Joi.number().integer().greater(0).required().messages({
      'number.integer': 'id should be of type integer',
      'number.invalid': 'id should be strictly positive number',
      'number.required': 'id is required'
    })
  }
};

const stringValidation = (property) => {
  const validation = {};
  const params = {};
  params[property] = Joi.string()
    .min(1)
    .required()
    .messages({
      'string.base': `${property} should be of type string`,
      'string.min': `${property} should have a minimum length of 1`,
      'string.required': `${property} is required`
    });
  validation.params = params;
  return validation;
};

// Currently not in use. Might be useful at a later stage in development.
/*
const sdgNumberValidation = (property) => {
  const validation = {};
  const params = {};
  params[property] = Joi.string()
    .pattern(/\d(\.\d)*(\.[a-z])?/)
    .required()
    .messages({
      'string.base': `${property} should be of type string`,
      'string.pattern': `${property} should match format`,
      'string.required': `${property} is required`
    });
  validation.params = params;
  return validation;
};
*/

const loginValidation = {
  body: {
    username: Joi.string().required().messages({
      'string.base': 'username should be of type string',
      'string.required': 'username is required'
    }),
    password: Joi.string().required().messages({
      'string.base': 'password should be of type string',
      'string.required': 'password is required'
    })
  }
};

const templateBodyValidation = {
  body: {
    template: Joi.string()
      .required()
      .pattern(/^{"tiles":\[{"id":\d,"csr_ids":\[.*\]}+\],"layout":{"wide":{.*},"narrow":{.*}}}$/)
      .min(1)
      .messages({
        'string.base': 'template should be of type string',
        'string.required': 'template is required',
        'string.pattern': 'template should match pattern',
        'string.min': 'template should have a minimum length of 1'
      })
  }
};

const customizableBodyValidation = {
  body: {
    customizable: Joi.boolean().required().messages({
      'boolean.base': 'customizable should be of type boolean',
      'boolean.required': 'customizable is required'
    })
  }
};

module.exports = {
  idValidation,
  loginValidation,
  stringValidation,
  templateBodyValidation,
  customizableBodyValidation
};
