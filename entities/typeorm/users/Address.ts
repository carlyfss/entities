import { Exclude } from 'class-transformer';
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  DeleteDateColumn,
  ManyToOne,
} from 'typeorm';
import { User } from '.';

/**
 * Address entity fields:
 * @id string
 * @user_id string
 * @country string
 * @state string
 * @city string
 * @street string
 * @number number
 * @district string
 * @postal_code string (min-length = 4, max-length = 12)
 */
@Entity('addresses')
export default class Address {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  @Exclude()
  user_id: string;

  @Column()
  index: number;

  @ManyToOne(type => User, user => user.addresses)
  user: User;
  
  @Column()
  country : string
  
  @Column()
  state : string
  
  @Column()
  city : string

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