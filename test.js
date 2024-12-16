let test = {test: 1}
func = () => {console.log(test)}
func()
test.test = 2
func()

