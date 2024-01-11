import PostContainer from '../../components/post-container'
import { Table, Row } from '@/app/components/workout/workout'
import { getDate } from '@/app/utils/date'

export default function Post() {
  const SETS = 3

  return (
    <PostContainer>
      <h2>Legs</h2>
      <h3>{getDate('2024-01-02')}</h3>
      <p>
        Leg Day. Workout took about 35 minutes to complete. This was the first leg workout in this program. Definitely
        have room to increase the weights next week.
      </p>
      <Table sets={SETS}>
        <Row name="Dead Lift" weight="30" rep="15" sets={SETS} />
        <Row name="Hack Squat" weight="30" rep="15" sets={SETS} />
        <Row name="Sumo Squat" weight="30" rep="15" sets={SETS} />
        <Row name="Single Leg Bridge (both legs)" weight="--" rep="15" sets={SETS} />
        <Row name="Reverse Lunge (both legs)" weight="20" rep="15" sets={SETS} />
        <Row name="Front Lunge (both legs)" weight="20" rep="15" sets={SETS} />
      </Table>
    </PostContainer>
  )
}
