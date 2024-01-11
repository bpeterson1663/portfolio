import PostContainer from '../../components/post-container'
import { Table, Row } from '@/app/components/workout/workout'
import { getDate } from '@/app/utils/date'

export default function Post() {
  const SETS = 4

  return (
    <PostContainer>
      <h2>Arms and Abs</h2>
      <h3>{getDate('2024-01-04')}</h3>
      <p>
        Arms and Abs Day. Workout took about 42 minutes to complete. First time doing this workout so went lighter on
        the weight selection to burn myself out too quickly. Tricep pushups killed me. Can up the weights on the Hammer
        Curls and EZ Bar Curls.
      </p>
      <Table sets={SETS}>
        <Row name="Tricep Press" weight="30" rep="15" sets={SETS} />
        <Row name="Tricep Pushups" weight="--" rep="15" sets={SETS} />
        <Row name="Skul Crushers" weight="20" rep="15" sets={SETS} />
        <Row name="Hammer Curls" weight="20" rep="15" sets={SETS} />
        <Row name="EZ Bar Curls" weight="20" rep="15" sets={SETS} />
        <Row name="Dips" weight="--" rep="15" sets={SETS} />
        <Row name="Plank" weight="--" rep="30s" sets={SETS} />
        <Row name="Prayer Crunches" weight="--" rep="15" sets={SETS} />
        <Row name="Russian Twist" weight="--" rep="15" sets={SETS} />
        <Row name="Bicycle Crunches" weight="--" rep="15" sets={SETS} />
      </Table>
    </PostContainer>
  )
}
