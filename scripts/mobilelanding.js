$('#header').hide()
liff
  .init({
    liffId: "1655539437-ploBZxNG" // Use own liffId
  })
  .then(() => {
    liff.getProfile().then(profile => {
                                        const name = profile.displayName
                                        alert(name)
                                        window.location.href = "index.php?action=mobile&cache=" + new Date().getTime();
                            })
  })