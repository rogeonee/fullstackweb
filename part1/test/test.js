const parts = [
    {
      name: 'Fundamentals of React',
      exercises: 10
    },
    {
      name: 'Using props to pass data',
      exercises: 7
    },
    {
      name: 'State of a component',
      exercises: 14
    }
  ]

Content(parts)

  function Content(props) {
        let a = props[0]
        let b = a.name
        console.log(a)
        console.log(b)
  }

  function pt(props) {
        console.log(props.name)
        console.log(props.exercises)
  }

  //console.log(parts[0])