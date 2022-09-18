<script>
  import { Doughnut } from 'vue-chartjs/legacy'
  export default {
    extends: Doughnut,
    props:{
      label:{
        type:String
      },
      chartData:{
        type:Array
      },
      chartOptions:{
        type:Object
      }
    },
    mounted(){
      const dates = this.chartData.map(d=>d.date)
      const totals = this.chartData.map(d=>d.total)

      this.renderChart({
        labels: dates,
        datasets:[
          {
            label:this.label,
            data:totals,
          }
        ]

      },
      this.options
      )
    }
  }

</script>
