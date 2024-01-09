import PostContainer from '../components/post-container'
import { Table, Row } from '@/app/components/workout/workout'
import { getDate } from '@/app/utils/date'

export default function Post() {
  const SETS = 4

  return (
    <PostContainer>
      <h2>Shoulders</h2>
      <h3>{getDate('2024-01-05')}</h3>
      <p>
        Shoulder Day. Increased the weight in a couple of excercises since last week. Overall workout took about 30
        minutes, with no rest in between excercises and 2 minutes of rest between sets.
      </p>
      <Table sets={SETS}>
        <Row name="Shoulder Press" weight="30" rep="15" sets={SETS} />
        <Row name="Front Raises" weight="15" rep="15" sets={SETS} />
        <Row name="Lateral Raises" weight="10" rep="15" sets={SETS} />
        <Row name="Shrugs" weight="30" rep="15" sets={SETS} />
        <Row name="Upright Row" weight="20" rep="15" sets={SETS} />
        <Row name="Rear Delt Flys" weight="10" rep="15" sets={SETS} />
      </Table>
    </PostContainer>
  )
}
