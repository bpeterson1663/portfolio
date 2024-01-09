import PostContainer from '../components/post-container'
import { Table, Row } from '@/app/components/workout/workout'
import { getDate } from '@/app/utils/date'

export default function Post() {
  const SETS = 3

  return (
    <PostContainer>
      <h2>Legs</h2>
      <h3>{getDate('2024-01-08')}</h3>
      <p>
        Leg Day. Rest day yesterday. Workout took about 32 minutes to complete. Increase the weights in the first three
        excercise since last time.
      </p>
      <Table sets={SETS}>
        <Row name="Dead Lift" weight="35" rep="15" sets={SETS} />
        <Row name="Hack Squat" weight="35" rep="15" sets={SETS} />
        <Row name="Sumo Squat" weight="35" rep="15" sets={SETS} />
        <Row name="Single Leg Bridge (both legs)" weight="--" rep="15" sets={SETS} />
        <Row name="Reverse Lunge (both legs)" weight="20" rep="15" sets={SETS} />
        <Row name="Front Lunge (both legs)" weight="20" rep="15" sets={SETS} />
      </Table>
    </PostContainer>
  )
}
