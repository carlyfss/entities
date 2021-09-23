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
  constructor(partial: Partial<Address>) {
    Object.assign(this, partial);
  }

  @PrimaryGeneratedColumn('uuid')
  id!: string;

  @Column()
  user_id!: string;

  @Column()
  zip_code!: string;
  
  @Column()
  country!: string;
  
  @Column()
  state!: string;
  
  @Column()
  city!: string;

  @Column()
  street!: string;

  @Column()
  number!: number;

  @Column()
  neighborhood!: string;

  @Column()
  complement!: string;

  @Column()
  description!: string;

  @CreateDateColumn()
  created_at!: Date;

  @UpdateDateColumn()
  updated_at!: Date;

  @DeleteDateColumn()
  deleted_at!: Date;

  get information(): Partial<Address> {
    return {
      id: this.id,
      country: this.country,
      state: this.state,
      city: this.city,
      street: this.street,
      number: this.number,
      neighborhood: this.neighborhood,
      complement: this.complement,
      description: this.description,
    }
  }
}