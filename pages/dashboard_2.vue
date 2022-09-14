<template>
<v-col md="6">

<apexchart width="500" type="line" :options="options" :series="series"></apexchart>

</v-col>
</template>
<script>
  import useState from 'vue'
  import useEffect from 'vue'
export default{
data: function(){
  const [category, setCategory] = useState([])
  const [data, setData] = useState([])

  useEffect(() => {
      const age = [];
      const salary = [];

      axios.get("https://dummy.restapiexample.com/api/v1/employees").then(response =>{
          console.log("response", response)
          response.data.data.map(item => {
            console.log("item", item)
              age.push(item.employee_age);
              salary.push(item.employee_salary)
          })
          setCategory(salary)
          setData(age)

          console.log("age", age, salary)
      }).catch(e => {
          alert(e);
      })
  }, [])
  return {
    options: {
        chart: {
          id: 'vuechart-example'
        },
        xaxis: {
          categories: category
        }
      },
      series: [{
        name: 'series-1',
        data: data
      }]
    }
  }
}

</script>
<style>

</style>
