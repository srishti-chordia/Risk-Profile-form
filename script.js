document.getElementById('calculate').addEventListener('click', function() {
  const risk = document.querySelector('input[name="risk"]:checked');

  if (!risk) {
    alert("Please select your risk tolerance.");
    return;
  }

  const strategies = {
    Conservative: {
      title: "Conservative Strategy",
      description: "Focus on capital preservation with low-risk investments like bonds and blue-chip stocks. Diversification is key.",
      icon: "🛡️"
    },
    Moderate: {
      title: "Moderate Strategy",
      description: "A balanced approach. Mix growth stocks with stable, dividend-paying assets to balance risk and return.",
      icon: "📈"
    },
    Aggressive: {
      title: "Aggressive Strategy",
      description: "Aim for high growth with investments in tech stocks and emerging markets. Be prepared for higher volatility.",
      icon: "⚡"
    }
  };

  let selectedProfile;
  if (risk.value === "Low") selectedProfile = strategies.Conservative;
  else if (risk.value === "Medium") selectedProfile = strategies.Moderate;
  else selectedProfile = strategies.Aggressive;

  document.getElementById('profileTitle').textContent = `${selectedProfile.icon} ${selectedProfile.title}`;
  document.getElementById('profileDesc').textContent = selectedProfile.description;

  document.getElementById('popup').style.display = 'flex';
});

document.getElementById('closePopup').addEventListener('click', function() {
  document.getElementById('popup').style.display = 'none';
});
