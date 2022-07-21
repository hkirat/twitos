// Code generated by protoc-gen-gogo. DO NOT EDIT.
// source: twitos/tweet.proto

package types

import (
	fmt "fmt"
	proto "github.com/gogo/protobuf/proto"
	io "io"
	math "math"
	math_bits "math/bits"
)

// Reference imports to suppress errors if they are not otherwise used.
var _ = proto.Marshal
var _ = fmt.Errorf
var _ = math.Inf

// This is a compile-time assertion to ensure that this generated file
// is compatible with the proto package it is being compiled against.
// A compilation error at this line likely means your copy of the
// proto package needs to be updated.
const _ = proto.GoGoProtoPackageIsVersion3 // please upgrade the proto package

type Tweet struct {
	Id          uint64 `protobuf:"varint,1,opt,name=id,proto3" json:"id,omitempty"`
	TweetId     uint64 `protobuf:"varint,2,opt,name=tweetId,proto3" json:"tweetId,omitempty"`
	Owner       uint64 `protobuf:"varint,3,opt,name=owner,proto3" json:"owner,omitempty"`
	Description string `protobuf:"bytes,4,opt,name=description,proto3" json:"description,omitempty"`
	Likes       uint64 `protobuf:"varint,5,opt,name=likes,proto3" json:"likes,omitempty"`
	Comments    uint64 `protobuf:"varint,6,opt,name=comments,proto3" json:"comments,omitempty"`
}

func (m *Tweet) Reset()         { *m = Tweet{} }
func (m *Tweet) String() string { return proto.CompactTextString(m) }
func (*Tweet) ProtoMessage()    {}
func (*Tweet) Descriptor() ([]byte, []int) {
	return fileDescriptor_978cce20aa9078f5, []int{0}
}
func (m *Tweet) XXX_Unmarshal(b []byte) error {
	return m.Unmarshal(b)
}
func (m *Tweet) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	if deterministic {
		return xxx_messageInfo_Tweet.Marshal(b, m, deterministic)
	} else {
		b = b[:cap(b)]
		n, err := m.MarshalToSizedBuffer(b)
		if err != nil {
			return nil, err
		}
		return b[:n], nil
	}
}
func (m *Tweet) XXX_Merge(src proto.Message) {
	xxx_messageInfo_Tweet.Merge(m, src)
}
func (m *Tweet) XXX_Size() int {
	return m.Size()
}
func (m *Tweet) XXX_DiscardUnknown() {
	xxx_messageInfo_Tweet.DiscardUnknown(m)
}

var xxx_messageInfo_Tweet proto.InternalMessageInfo

func (m *Tweet) GetId() uint64 {
	if m != nil {
		return m.Id
	}
	return 0
}

func (m *Tweet) GetTweetId() uint64 {
	if m != nil {
		return m.TweetId
	}
	return 0
}

func (m *Tweet) GetOwner() uint64 {
	if m != nil {
		return m.Owner
	}
	return 0
}

func (m *Tweet) GetDescription() string {
	if m != nil {
		return m.Description
	}
	return ""
}

func (m *Tweet) GetLikes() uint64 {
	if m != nil {
		return m.Likes
	}
	return 0
}

func (m *Tweet) GetComments() uint64 {
	if m != nil {
		return m.Comments
	}
	return 0
}

func init() {
	proto.RegisterType((*Tweet)(nil), "hkirat.twitos.twitos.Tweet")
}

func init() { proto.RegisterFile("twitos/tweet.proto", fileDescriptor_978cce20aa9078f5) }

var fileDescriptor_978cce20aa9078f5 = []byte{
	// 222 bytes of a gzipped FileDescriptorProto
	0x1f, 0x8b, 0x08, 0x00, 0x00, 0x00, 0x00, 0x00, 0x02, 0xff, 0xe2, 0x12, 0x2a, 0x29, 0xcf, 0x2c,
	0xc9, 0x2f, 0xd6, 0x2f, 0x29, 0x4f, 0x4d, 0x2d, 0xd1, 0x2b, 0x28, 0xca, 0x2f, 0xc9, 0x17, 0x12,
	0xc9, 0xc8, 0xce, 0x2c, 0x4a, 0x2c, 0xd1, 0x83, 0x48, 0x41, 0x29, 0xa5, 0xd9, 0x8c, 0x5c, 0xac,
	0x21, 0x20, 0x55, 0x42, 0x7c, 0x5c, 0x4c, 0x99, 0x29, 0x12, 0x8c, 0x0a, 0x8c, 0x1a, 0x2c, 0x41,
	0x4c, 0x99, 0x29, 0x42, 0x12, 0x5c, 0xec, 0x60, 0xed, 0x9e, 0x29, 0x12, 0x4c, 0x60, 0x41, 0x18,
	0x57, 0x48, 0x84, 0x8b, 0x35, 0xbf, 0x3c, 0x2f, 0xb5, 0x48, 0x82, 0x19, 0x2c, 0x0e, 0xe1, 0x08,
	0x29, 0x70, 0x71, 0xa7, 0xa4, 0x16, 0x27, 0x17, 0x65, 0x16, 0x94, 0x64, 0xe6, 0xe7, 0x49, 0xb0,
	0x28, 0x30, 0x6a, 0x70, 0x06, 0x21, 0x0b, 0x81, 0xf4, 0xe5, 0x64, 0x66, 0xa7, 0x16, 0x4b, 0xb0,
	0x42, 0xf4, 0x81, 0x39, 0x42, 0x52, 0x5c, 0x1c, 0xc9, 0xf9, 0xb9, 0xb9, 0xa9, 0x79, 0x25, 0xc5,
	0x12, 0x6c, 0x60, 0x09, 0x38, 0xdf, 0xc9, 0xf1, 0xc4, 0x23, 0x39, 0xc6, 0x0b, 0x8f, 0xe4, 0x18,
	0x1f, 0x3c, 0x92, 0x63, 0x9c, 0xf0, 0x58, 0x8e, 0xe1, 0xc2, 0x63, 0x39, 0x86, 0x1b, 0x8f, 0xe5,
	0x18, 0xa2, 0xd4, 0xd3, 0x33, 0x4b, 0x32, 0x4a, 0x93, 0xf4, 0x92, 0xf3, 0x73, 0xf5, 0x21, 0x1e,
	0xd3, 0x87, 0xfa, 0xb9, 0x02, 0xc6, 0x28, 0xa9, 0x2c, 0x48, 0x2d, 0x4e, 0x62, 0x03, 0xfb, 0xde,
	0x18, 0x10, 0x00, 0x00, 0xff, 0xff, 0xe8, 0xe0, 0x32, 0x82, 0x13, 0x01, 0x00, 0x00,
}

func (m *Tweet) Marshal() (dAtA []byte, err error) {
	size := m.Size()
	dAtA = make([]byte, size)
	n, err := m.MarshalToSizedBuffer(dAtA[:size])
	if err != nil {
		return nil, err
	}
	return dAtA[:n], nil
}

func (m *Tweet) MarshalTo(dAtA []byte) (int, error) {
	size := m.Size()
	return m.MarshalToSizedBuffer(dAtA[:size])
}

func (m *Tweet) MarshalToSizedBuffer(dAtA []byte) (int, error) {
	i := len(dAtA)
	_ = i
	var l int
	_ = l
	if m.Comments != 0 {
		i = encodeVarintTweet(dAtA, i, uint64(m.Comments))
		i--
		dAtA[i] = 0x30
	}
	if m.Likes != 0 {
		i = encodeVarintTweet(dAtA, i, uint64(m.Likes))
		i--
		dAtA[i] = 0x28
	}
	if len(m.Description) > 0 {
		i -= len(m.Description)
		copy(dAtA[i:], m.Description)
		i = encodeVarintTweet(dAtA, i, uint64(len(m.Description)))
		i--
		dAtA[i] = 0x22
	}
	if m.Owner != 0 {
		i = encodeVarintTweet(dAtA, i, uint64(m.Owner))
		i--
		dAtA[i] = 0x18
	}
	if m.TweetId != 0 {
		i = encodeVarintTweet(dAtA, i, uint64(m.TweetId))
		i--
		dAtA[i] = 0x10
	}
	if m.Id != 0 {
		i = encodeVarintTweet(dAtA, i, uint64(m.Id))
		i--
		dAtA[i] = 0x8
	}
	return len(dAtA) - i, nil
}

func encodeVarintTweet(dAtA []byte, offset int, v uint64) int {
	offset -= sovTweet(v)
	base := offset
	for v >= 1<<7 {
		dAtA[offset] = uint8(v&0x7f | 0x80)
		v >>= 7
		offset++
	}
	dAtA[offset] = uint8(v)
	return base
}
func (m *Tweet) Size() (n int) {
	if m == nil {
		return 0
	}
	var l int
	_ = l
	if m.Id != 0 {
		n += 1 + sovTweet(uint64(m.Id))
	}
	if m.TweetId != 0 {
		n += 1 + sovTweet(uint64(m.TweetId))
	}
	if m.Owner != 0 {
		n += 1 + sovTweet(uint64(m.Owner))
	}
	l = len(m.Description)
	if l > 0 {
		n += 1 + l + sovTweet(uint64(l))
	}
	if m.Likes != 0 {
		n += 1 + sovTweet(uint64(m.Likes))
	}
	if m.Comments != 0 {
		n += 1 + sovTweet(uint64(m.Comments))
	}
	return n
}

func sovTweet(x uint64) (n int) {
	return (math_bits.Len64(x|1) + 6) / 7
}
func sozTweet(x uint64) (n int) {
	return sovTweet(uint64((x << 1) ^ uint64((int64(x) >> 63))))
}
func (m *Tweet) Unmarshal(dAtA []byte) error {
	l := len(dAtA)
	iNdEx := 0
	for iNdEx < l {
		preIndex := iNdEx
		var wire uint64
		for shift := uint(0); ; shift += 7 {
			if shift >= 64 {
				return ErrIntOverflowTweet
			}
			if iNdEx >= l {
				return io.ErrUnexpectedEOF
			}
			b := dAtA[iNdEx]
			iNdEx++
			wire |= uint64(b&0x7F) << shift
			if b < 0x80 {
				break
			}
		}
		fieldNum := int32(wire >> 3)
		wireType := int(wire & 0x7)
		if wireType == 4 {
			return fmt.Errorf("proto: Tweet: wiretype end group for non-group")
		}
		if fieldNum <= 0 {
			return fmt.Errorf("proto: Tweet: illegal tag %d (wire type %d)", fieldNum, wire)
		}
		switch fieldNum {
		case 1:
			if wireType != 0 {
				return fmt.Errorf("proto: wrong wireType = %d for field Id", wireType)
			}
			m.Id = 0
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowTweet
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				m.Id |= uint64(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
		case 2:
			if wireType != 0 {
				return fmt.Errorf("proto: wrong wireType = %d for field TweetId", wireType)
			}
			m.TweetId = 0
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowTweet
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				m.TweetId |= uint64(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
		case 3:
			if wireType != 0 {
				return fmt.Errorf("proto: wrong wireType = %d for field Owner", wireType)
			}
			m.Owner = 0
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowTweet
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				m.Owner |= uint64(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
		case 4:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field Description", wireType)
			}
			var stringLen uint64
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowTweet
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				stringLen |= uint64(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
			intStringLen := int(stringLen)
			if intStringLen < 0 {
				return ErrInvalidLengthTweet
			}
			postIndex := iNdEx + intStringLen
			if postIndex < 0 {
				return ErrInvalidLengthTweet
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			m.Description = string(dAtA[iNdEx:postIndex])
			iNdEx = postIndex
		case 5:
			if wireType != 0 {
				return fmt.Errorf("proto: wrong wireType = %d for field Likes", wireType)
			}
			m.Likes = 0
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowTweet
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				m.Likes |= uint64(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
		case 6:
			if wireType != 0 {
				return fmt.Errorf("proto: wrong wireType = %d for field Comments", wireType)
			}
			m.Comments = 0
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowTweet
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				m.Comments |= uint64(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
		default:
			iNdEx = preIndex
			skippy, err := skipTweet(dAtA[iNdEx:])
			if err != nil {
				return err
			}
			if (skippy < 0) || (iNdEx+skippy) < 0 {
				return ErrInvalidLengthTweet
			}
			if (iNdEx + skippy) > l {
				return io.ErrUnexpectedEOF
			}
			iNdEx += skippy
		}
	}

	if iNdEx > l {
		return io.ErrUnexpectedEOF
	}
	return nil
}
func skipTweet(dAtA []byte) (n int, err error) {
	l := len(dAtA)
	iNdEx := 0
	depth := 0
	for iNdEx < l {
		var wire uint64
		for shift := uint(0); ; shift += 7 {
			if shift >= 64 {
				return 0, ErrIntOverflowTweet
			}
			if iNdEx >= l {
				return 0, io.ErrUnexpectedEOF
			}
			b := dAtA[iNdEx]
			iNdEx++
			wire |= (uint64(b) & 0x7F) << shift
			if b < 0x80 {
				break
			}
		}
		wireType := int(wire & 0x7)
		switch wireType {
		case 0:
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return 0, ErrIntOverflowTweet
				}
				if iNdEx >= l {
					return 0, io.ErrUnexpectedEOF
				}
				iNdEx++
				if dAtA[iNdEx-1] < 0x80 {
					break
				}
			}
		case 1:
			iNdEx += 8
		case 2:
			var length int
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return 0, ErrIntOverflowTweet
				}
				if iNdEx >= l {
					return 0, io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				length |= (int(b) & 0x7F) << shift
				if b < 0x80 {
					break
				}
			}
			if length < 0 {
				return 0, ErrInvalidLengthTweet
			}
			iNdEx += length
		case 3:
			depth++
		case 4:
			if depth == 0 {
				return 0, ErrUnexpectedEndOfGroupTweet
			}
			depth--
		case 5:
			iNdEx += 4
		default:
			return 0, fmt.Errorf("proto: illegal wireType %d", wireType)
		}
		if iNdEx < 0 {
			return 0, ErrInvalidLengthTweet
		}
		if depth == 0 {
			return iNdEx, nil
		}
	}
	return 0, io.ErrUnexpectedEOF
}

var (
	ErrInvalidLengthTweet        = fmt.Errorf("proto: negative length found during unmarshaling")
	ErrIntOverflowTweet          = fmt.Errorf("proto: integer overflow")
	ErrUnexpectedEndOfGroupTweet = fmt.Errorf("proto: unexpected end of group")
)
