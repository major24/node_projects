const isValidPhone = (phone) => {
  const areaCode = phone.substring(0, 3)
  return phone.length === 10 && areaCode !== '800'
}

module.exports = isValidPhone
