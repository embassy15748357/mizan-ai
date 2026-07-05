// Chat controller for Mizan AI

module.exports = {
  chat: async (req, res) => {
    res.json({
      success: true,
      message: "Mizan AI chat controller is working."
    });
  }
};