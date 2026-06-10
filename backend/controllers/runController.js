const axios = require("axios");

const languageMap = {
  cpp: 54,
  java: 62,
  javascript: 63,
  python: 71,
};

exports.runCode = async (req, res) => {
  try {
    const {
      source_code,
      stdin,
      language,
    } = req.body;

    const response = await axios.post(
      "https://ce.judge0.com/submissions?wait=true",
      {
        source_code,
        stdin,
        language_id:
          languageMap[language],
      }
    );

    res.json(response.data);
  } catch (error) {
    console.log(error.message);

    res.status(500).json({
      error: "Execution failed",
    });
  }
};