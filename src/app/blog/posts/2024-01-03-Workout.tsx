import Link from 'next/link'
import PostContainer from '../components/post-container'
import { Table, Row } from '@/app/components/workout/workout'
import { getDate } from '@/app/utils/date'

export default function Post() {
  const SETS = 4

  return (
    <PostContainer>
      <h2>Chest and Back</h2>
      <h3>{getDate('2024-01-03')}</h3>
      <p>
        Chest and Back day. Workout took about 40 minutes to complete. Weights were pretty challenging but managed.
        Increased my weights in two excercise from the last time I did this workout. Pullups still sucked, modified all
        of them but increase rep count. Increased the weight of the last two excercises but could up the weight more.{' '}
      </p>
      <Table sets={SETS}>
        <Row name="Pullups" weight="--" rep="6*" sets={SETS} />
        <Row name="Pushups" weight="--" rep="15" sets={SETS} />
        <Row name="Incline Fly" weight="25" rep="15" sets={SETS} />
        <Row name="Chest Press" weight="40" rep="15" sets={SETS} />
        <Row name="Dips" weight="--" rep="15" sets={SETS} />
        <Row name="Overhead Press" weight="30" rep="15" sets={SETS} />
        <Row name="Row" weight="22.5" rep="15" sets={SETS} />
        <Row name="Reverse Grip Row" weight="22.5" rep="15" sets={SETS} />
      </Table>
    </PostContainer>
  )
}
