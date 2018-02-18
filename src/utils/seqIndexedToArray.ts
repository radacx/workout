import moize from 'moize';
import { Seq } from 'immutable';

type SeqIndexedToArray = <T>(seqIndexed: Seq.Indexed<T>) => T[];

const _seqIndexedToArray: SeqIndexedToArray = keySeq => keySeq.toArray();
export const seqIndexedToArray = moize(_seqIndexedToArray) as SeqIndexedToArray;
