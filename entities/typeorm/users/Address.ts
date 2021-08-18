import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  DeleteDateColumn,
} from 'typeorm';

/**
 * Address entity fields:
 * @id string
 * @user_id string
 * @street string
 * @number number
 * @district string
 * @postal_code string
 */
@Entity('addresses')
export default class Address {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  user_id: string;

  @Column()
  street: string;

  @Column()
  number: number;

  @Column()
  district: string;

  @Column()
  complement: string;

  @Column()
  postal_code: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  @DeleteDateColumn()
  deleted_at: Date;
}