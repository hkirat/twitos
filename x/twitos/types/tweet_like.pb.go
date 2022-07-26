// Code generated by protoc-gen-gogo. DO NOT EDIT.
// source: twitos/tweet_like.proto

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

type TweetLike struct {
	Index   string `protobuf:"bytes,1,opt,name=index,proto3" json:"index,omitempty"`
	TweetId uint64 `protobuf:"varint,2,opt,name=tweetId,proto3" json:"tweetId,omitempty"`
	User    uint64 `protobuf:"varint,3,opt,name=user,proto3" json:"user,omitempty"`
}

func (m *TweetLike) Reset()         { *m = TweetLike{} }
func (m *TweetLike) String() string { return proto.CompactTextString(m) }
func (*TweetLike) ProtoMessage()    {}
func (*TweetLike) Descriptor() ([]byte, []int) {
	return fileDescriptor_1865fde61cfa5cf6, []int{0}
}
func (m *TweetLike) XXX_Unmarshal(b []byte) error {
	return m.Unmarshal(b)
}
func (m *TweetLike) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	if deterministic {
		return xxx_messageInfo_TweetLike.Marshal(b, m, deterministic)
	} else {
		b = b[:cap(b)]
		n, err := m.MarshalToSizedBuffer(b)
		if err != nil {
			return nil, err
		}
		return b[:n], nil
	}
}
func (m *TweetLike) XXX_Merge(src proto.Message) {
	xxx_messageInfo_TweetLike.Merge(m, src)
}
func (m *TweetLike) XXX_Size() int {
	return m.Size()
}
func (m *TweetLike) XXX_DiscardUnknown() {
	xxx_messageInfo_TweetLike.DiscardUnknown(m)
}

var xxx_messageInfo_TweetLike proto.InternalMessageInfo

func (m *TweetLike) GetIndex() string {
	if m != nil {
		return m.Index
	}
	return ""
}

func (m *TweetLike) GetTweetId() uint64 {
	if m != nil {
		return m.TweetId
	}
	return 0
}

func (m *TweetLike) GetUser() uint64 {
	if m != nil {
		return m.User
	}
	return 0
}

func init() {
	proto.RegisterType((*TweetLike)(nil), "hkirat.twitos.twitos.TweetLike")
}

func init() { proto.RegisterFile("twitos/tweet_like.proto", fileDescriptor_1865fde61cfa5cf6) }

var fileDescriptor_1865fde61cfa5cf6 = []byte{
	// 180 bytes of a gzipped FileDescriptorProto
	0x1f, 0x8b, 0x08, 0x00, 0x00, 0x00, 0x00, 0x00, 0x02, 0xff, 0xe2, 0x12, 0x2f, 0x29, 0xcf, 0x2c,
	0xc9, 0x2f, 0xd6, 0x2f, 0x29, 0x4f, 0x4d, 0x2d, 0x89, 0xcf, 0xc9, 0xcc, 0x4e, 0xd5, 0x2b, 0x28,
	0xca, 0x2f, 0xc9, 0x17, 0x12, 0xc9, 0xc8, 0xce, 0x2c, 0x4a, 0x2c, 0xd1, 0x83, 0xc8, 0x43, 0x29,
	0x25, 0x7f, 0x2e, 0xce, 0x10, 0x90, 0x4a, 0x9f, 0xcc, 0xec, 0x54, 0x21, 0x11, 0x2e, 0xd6, 0xcc,
	0xbc, 0x94, 0xd4, 0x0a, 0x09, 0x46, 0x05, 0x46, 0x0d, 0xce, 0x20, 0x08, 0x47, 0x48, 0x82, 0x8b,
	0x1d, 0x6c, 0x98, 0x67, 0x8a, 0x04, 0x93, 0x02, 0xa3, 0x06, 0x4b, 0x10, 0x8c, 0x2b, 0x24, 0xc4,
	0xc5, 0x52, 0x5a, 0x9c, 0x5a, 0x24, 0xc1, 0x0c, 0x16, 0x06, 0xb3, 0x9d, 0x1c, 0x4f, 0x3c, 0x92,
	0x63, 0xbc, 0xf0, 0x48, 0x8e, 0xf1, 0xc1, 0x23, 0x39, 0xc6, 0x09, 0x8f, 0xe5, 0x18, 0x2e, 0x3c,
	0x96, 0x63, 0xb8, 0xf1, 0x58, 0x8e, 0x21, 0x4a, 0x3d, 0x3d, 0xb3, 0x24, 0xa3, 0x34, 0x49, 0x2f,
	0x39, 0x3f, 0x57, 0x1f, 0xe2, 0x16, 0x7d, 0xa8, 0x5b, 0x2b, 0x60, 0x8c, 0x92, 0xca, 0x82, 0xd4,
	0xe2, 0x24, 0x36, 0xb0, 0x83, 0x8d, 0x01, 0x01, 0x00, 0x00, 0xff, 0xff, 0x72, 0x2b, 0x3d, 0x43,
	0xcb, 0x00, 0x00, 0x00,
}

func (m *TweetLike) Marshal() (dAtA []byte, err error) {
	size := m.Size()
	dAtA = make([]byte, size)
	n, err := m.MarshalToSizedBuffer(dAtA[:size])
	if err != nil {
		return nil, err
	}
	return dAtA[:n], nil
}

func (m *TweetLike) MarshalTo(dAtA []byte) (int, error) {
	size := m.Size()
	return m.MarshalToSizedBuffer(dAtA[:size])
}

func (m *TweetLike) MarshalToSizedBuffer(dAtA []byte) (int, error) {
	i := len(dAtA)
	_ = i
	var l int
	_ = l
	if m.User != 0 {
		i = encodeVarintTweetLike(dAtA, i, uint64(m.User))
		i--
		dAtA[i] = 0x18
	}
	if m.TweetId != 0 {
		i = encodeVarintTweetLike(dAtA, i, uint64(m.TweetId))
		i--
		dAtA[i] = 0x10
	}
	if len(m.Index) > 0 {
		i -= len(m.Index)
		copy(dAtA[i:], m.Index)
		i = encodeVarintTweetLike(dAtA, i, uint64(len(m.Index)))
		i--
		dAtA[i] = 0xa
	}
	return len(dAtA) - i, nil
}

func encodeVarintTweetLike(dAtA []byte, offset int, v uint64) int {
	offset -= sovTweetLike(v)
	base := offset
	for v >= 1<<7 {
		dAtA[offset] = uint8(v&0x7f | 0x80)
		v >>= 7
		offset++
	}
	dAtA[offset] = uint8(v)
	return base
}
func (m *TweetLike) Size() (n int) {
	if m == nil {
		return 0
	}
	var l int
	_ = l
	l = len(m.Index)
	if l > 0 {
		n += 1 + l + sovTweetLike(uint64(l))
	}
	if m.TweetId != 0 {
		n += 1 + sovTweetLike(uint64(m.TweetId))
	}
	if m.User != 0 {
		n += 1 + sovTweetLike(uint64(m.User))
	}
	return n
}

func sovTweetLike(x uint64) (n int) {
	return (math_bits.Len64(x|1) + 6) / 7
}
func sozTweetLike(x uint64) (n int) {
	return sovTweetLike(uint64((x << 1) ^ uint64((int64(x) >> 63))))
}
func (m *TweetLike) Unmarshal(dAtA []byte) error {
	l := len(dAtA)
	iNdEx := 0
	for iNdEx < l {
		preIndex := iNdEx
		var wire uint64
		for shift := uint(0); ; shift += 7 {
			if shift >= 64 {
				return ErrIntOverflowTweetLike
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
			return fmt.Errorf("proto: TweetLike: wiretype end group for non-group")
		}
		if fieldNum <= 0 {
			return fmt.Errorf("proto: TweetLike: illegal tag %d (wire type %d)", fieldNum, wire)
		}
		switch fieldNum {
		case 1:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field Index", wireType)
			}
			var stringLen uint64
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowTweetLike
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
				return ErrInvalidLengthTweetLike
			}
			postIndex := iNdEx + intStringLen
			if postIndex < 0 {
				return ErrInvalidLengthTweetLike
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			m.Index = string(dAtA[iNdEx:postIndex])
			iNdEx = postIndex
		case 2:
			if wireType != 0 {
				return fmt.Errorf("proto: wrong wireType = %d for field TweetId", wireType)
			}
			m.TweetId = 0
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowTweetLike
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
				return fmt.Errorf("proto: wrong wireType = %d for field User", wireType)
			}
			m.User = 0
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowTweetLike
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				m.User |= uint64(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
		default:
			iNdEx = preIndex
			skippy, err := skipTweetLike(dAtA[iNdEx:])
			if err != nil {
				return err
			}
			if (skippy < 0) || (iNdEx+skippy) < 0 {
				return ErrInvalidLengthTweetLike
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
func skipTweetLike(dAtA []byte) (n int, err error) {
	l := len(dAtA)
	iNdEx := 0
	depth := 0
	for iNdEx < l {
		var wire uint64
		for shift := uint(0); ; shift += 7 {
			if shift >= 64 {
				return 0, ErrIntOverflowTweetLike
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
					return 0, ErrIntOverflowTweetLike
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
					return 0, ErrIntOverflowTweetLike
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
				return 0, ErrInvalidLengthTweetLike
			}
			iNdEx += length
		case 3:
			depth++
		case 4:
			if depth == 0 {
				return 0, ErrUnexpectedEndOfGroupTweetLike
			}
			depth--
		case 5:
			iNdEx += 4
		default:
			return 0, fmt.Errorf("proto: illegal wireType %d", wireType)
		}
		if iNdEx < 0 {
			return 0, ErrInvalidLengthTweetLike
		}
		if depth == 0 {
			return iNdEx, nil
		}
	}
	return 0, io.ErrUnexpectedEOF
}

var (
	ErrInvalidLengthTweetLike        = fmt.Errorf("proto: negative length found during unmarshaling")
	ErrIntOverflowTweetLike          = fmt.Errorf("proto: integer overflow")
	ErrUnexpectedEndOfGroupTweetLike = fmt.Errorf("proto: unexpected end of group")
)
