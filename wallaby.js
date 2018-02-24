module.exports = (wallaby) => {

  console.log(wallaby);

    return {
      files: [
        'src/**/*.js'
      ],
      tests: [
        'tests/**/*.test.js'
      ],
      debug: true,
    
      env: {
        type: 'node',
        runner: 'node'
      },
  
      testFramework: 'jest'
    };
  };