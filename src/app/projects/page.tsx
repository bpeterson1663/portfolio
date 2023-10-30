import Image from 'next/image'
import Card from '../components/card/card'
import Grid from '../components/grid/grid'

export default function Page() {
  return (
    <div>
      <Grid>
        <Card>
          <h2>Title</h2>
          <p>Lorem ipsum description</p>
          <Image alt="Default" src="/static/wine-tasting.jpg" width={300} height={300} />
        </Card>
        <Card />
      </Grid>
    </div>
  )
}
