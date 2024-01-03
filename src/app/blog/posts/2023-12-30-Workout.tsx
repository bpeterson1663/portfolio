import Link from 'next/link'
import PostContainer from '../components/post-container'
import { Table, Row } from '@/app/components/workout/workout'
import { getDate } from '@/app/utils/date'

export default function Post() {
  const SETS = 4

  return (
    <PostContainer>
      <h2>Chest and Back</h2>
      <h3>{getDate('2023-12-30')}</h3>
      <p>
        Chest and Back day. Workout took about 40 minutes to complete. Weights were pretty challenging but managed.
        Pullups sucked, modified all of them. Could increase the weights in the last few excercises.{' '}
      </p>
      <Table sets={SETS}>
        <Row name="Pullups" weight="--" rep="5*" sets={SETS} />
        <Row name="Pushups" weight="--" rep="15" sets={SETS} />
        <Row name="Incline Fly" weight="25" rep="15" sets={SETS} />
        <Row name="Chest Press" weight="35" rep="15" sets={SETS} />
        <Row name="Dips" weight="--" rep="15" sets={SETS} />
        <Row
          name="Overhead Press"
          weight="25"
          rep="15"
          sets={SETS}
          notes="increased the weight to 30 on the last set"
        />
        <Row name="Row" weight="20" rep="15" sets={SETS} />
        <Row name="Reverse Grip Row" weight="20" rep="15" sets={SETS} />
      </Table>
    </PostContainer>
  )
}
