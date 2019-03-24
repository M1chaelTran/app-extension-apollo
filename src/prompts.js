/**
 * Quasar App Extension prompts script
 *
 * Inquirer prompts
 * (answers are available as "api.prompts" in the other scripts)
 * https://www.npmjs.com/package/inquirer#question
 *
 * Example:

  return [
    name: {
      type: 'string',
      required: true,
      message: 'Quasar CLI Extension name (without prefix)',
    },
    preset: {
      type: 'checkbox',
      message: 'Check the features needed for your project:',
      choices: [
        {
          name: 'Install script',
          value: 'install'
        },
        {
          name: 'Prompts script',
          value: 'prompts'
        },
        {
          name: 'Uninstall script',
          value: 'uninstall'
        }
      ]
    }
  ]

 */

module.exports = function () {
  return [
	  {
		  name: 'options',
		  type: 'checkbox',
		  required: true,
		  message:
			  'AVA Unit testing will now be installed. Please choose additional options:',
		  choices: [
			  {
				  name: 'Install Server',
				  value: 'server'
			  },
			  {
				  name: 'Install Apollo',
				  value: 'apollo'
			  }
		  ]
	  }
  ]
}
