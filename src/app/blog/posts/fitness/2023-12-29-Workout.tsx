import PostContainer from '../../components/post-container'
import { Table, Row } from '@/app/components/workout/workout'
import { getDate } from '@/app/utils/date'

export default function Post() {
  const SETS = 4

  return (
    <PostContainer>
      <h2>Sholders</h2>
      <h3>{getDate('2023-12-29')}</h3>
      <p>
        First workout in this new program. Shoulder Day. Workout took about 30 minutes to complete. Weights were pretty
        challenging but managed. Could increase the weights in the last few excercises.{' '}
      </p>
      <Table sets={SETS}>
        <Row name="Shoulder Press" weight="25" rep="15" sets={SETS} />
        <Row name="Front Raises" weight="12.5" rep="15" sets={SETS} />
        <Row name="Lateral Raises" weight="10" rep="15" sets={SETS} />
        <Row name="Shrugs" weight="25" rep="15" sets={SETS} />
        <Row name="Upright Row" weight="20" rep="15" sets={SETS} />
        <Row name="Rear Delt Flys" weight="10" rep="15" sets={SETS} />
      </Table>
    </PostContainer>
  )
}
